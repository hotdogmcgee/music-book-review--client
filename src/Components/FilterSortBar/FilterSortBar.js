import React from "react";
import { Section } from "../Utils/Utils";
import FilterButton from "./FilterButton/FilterButton";
import SortButton from "./SortButton/SortButton";
import "./FilterSortBar.css";
import BookListContext from "../../Contexts/BookListContext";

export default class FilterSortBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayOptions: false,
      list: [],
      filters: ["under 25 dollars", "old books", "recent"],
      filterOrSort: null,
      activeFilters: {
        "under 25 dollars": true,
        "old books": true,
        recent: true
      }
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

  handleSetOptions(list) {
    this.setState({
      list
    });
  }

  handleOptionClick(value) {
    if (this.state.filterOrSort === "filter") {
      this.toggleClass(value);
      this.handleFilterOptionClick(value);
    } else if (this.state.filterOrSort === "sort") {
      this.handleSortOptionClick(value);
    } else {
      return;
    }
  }

  handleFilterOptionClick(value) {
    const filters = this.state.filters;
    let newFilters;
    if (filters.includes(value)) {
      newFilters = filters.filter(item => item !== value);
      this.setState({
        filters: newFilters
      });
    } else {
      filters.push(value);
      newFilters = filters;
      this.setState({
        filters: newFilters
      });
    }

    this.props.onFilterOptionClick(newFilters);
  }

  //this works in reversing stuff, but is a bit ugly
  handleSortOptionClick(newSortValue) {
    const {
      searchValue,
      instrumentValue,
      filterValue,
      listSorted
    } = this.context.filterObject;

    const reverse = !listSorted;

    // this.context.setSortValue(sortValue)

    this.context.setFilterObject(
      searchValue,
      instrumentValue,
      filterValue,
      newSortValue,
      reverse
    );
  }

  renderOptionsList(list = []) {
    list = this.state.list;

    return (
      <ul className="options-list">
        {list.map((item, index) => {
          return (
            <li
              className={`option-list-item ${
                this.state.activeFilters[item]
                  ? "filter-highlight"
                  : "no-filter-highlight"
              }`}
              key={index}
              onClick={() => this.handleOptionClick(item)}
            >
              {item}
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
          <FilterButton
            toggleShowOptions={this.toggleShowOptions}
            setOptions={this.handleSetOptions}
            toggleFilterOrSort={this.setFilterOrSort}
          />
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
