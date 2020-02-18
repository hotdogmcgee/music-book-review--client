import React from "react";
import { Section } from "../Utils/Utils";
import SortButton from "./SortButton/SortButton";
import "./FilterSortBar.css";
import BookListContext from "../../Contexts/BookListContext";

//factored this way to account for future addition of filter options to this component.
export default class FilterSortBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayOptions: false,
      list: [],
      filterOrSort: null,
      arrowDown: true,
      activeSort: null
    };

    this.handleSetOptions = this.handleSetOptions.bind(this);
    this.handleSortOptionClick = this.handleSortOptionClick.bind(this);
  }

  static contextType = BookListContext;

  toggleShowOptions = () => {
    this.setState({
      displayOptions: !this.state.displayOptions
    });
  };

  setFilterOrSort = value => {
    this.setState({
      filterOrSort: value
    });
  };

  toggleClass = value => {
    const activeFilters = { ...this.state.activeFilters };
    activeFilters[value] = !this.state.activeFilters[value];
    this.setState({ activeFilters });
  };

  toggleSortClass = value => {
    this.setState({ activeSort: value });
  };

  toggleArrow = () => {
    this.setState({ arrowDown: !this.state.arrowDown });
  };

  handleSetOptions(list) {
    this.setState({
      list
    });
  }

  //want arrow behavior to be more predictable
  handleOptionClick(value) {
    if (this.state.filterOrSort === "filter") {
      this.toggleClass(value);
      this.handleFilterOptionClick(value);
    } else if (this.state.filterOrSort === "sort") {
      this.toggleSortClass(value);
      this.toggleArrow();
      this.handleSortOptionClick(value);
    } else {
      return;
    }
  }

  //this works in reversing lists, but is a bit ugly
  handleSortOptionClick(newSortValue) {
    const {
      searchValue,
      instrumentValue,
      filterValue,
      listSorted
    } = this.context.filterObject;

    const reverse = !listSorted;

    this.context.setFilterObject(
      searchValue,
      instrumentValue,
      filterValue,
      newSortValue,
      reverse
    );
  }

  renderArrow = item => {
    if (this.state.activeSort === item) {
      if (!this.state.arrowDown) {
        return (
          <span>
            <i className="arrow up"></i>
          </span>
        );
      } else {
        return (
          <span>
            <i className="arrow down"></i>
          </span>
        );
      }
    } else {
      return "";
    }
  };

  renderOptionsList(list = []) {
    list = this.state.list;

    return (
      <ul className="options-list">
        {list.map((item, index) => {

          return (
            <li
              className={`option-list-item capitalize ${
                this.state.activeSort === item
                  ? "filter-highlight"
                  : "no-filter-highlight"
              }`}
              key={index}
              onClick={() => this.handleOptionClick(item)}
            >
              {item}
              {this.renderArrow(item)}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <Section id="filter-sort-bar">
        <div className="filter-sort-buttons">
          <SortButton
            toggleShowOptions={this.toggleShowOptions}
            setOptions={this.handleSetOptions}
            toggleFilterOrSort={this.setFilterOrSort}
          />
        </div>
        <div>{this.state.displayOptions ? this.renderOptionsList() : null}</div>
      </Section>
    );
  }
}
