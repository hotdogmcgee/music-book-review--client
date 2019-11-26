import React from "react";
import { Section } from "../Utils/Utils";
import FilterButton from "./FilterButton/FilterButton";
import SortButton from "./SortButton/SortButton";
import "./FilterSortBar.css";

export default class FilterSortBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayOptions: false,
      list: [],
      filterOrSort: null
    };

    this.handleSetOptions = this.handleSetOptions.bind(this);
    this.handleSortOptionClick = this.handleSortOptionClick.bind(this);
  }

  toggleShowOptions = () => {
    const bool = !this.state.displayOptions;
    this.setState({ displayOptions: bool });
  };

  setFilterOrSort = value => {
    console.log('ran');
    this.setState({
      filterOrSort: value
    });
  };

  handleSetOptions(list) {
    this.setState({
      list
    });
  }

  handleOptionClick(value) {
    if (this.state.filterOrSort === "filter") {
      this.handleFilterOptionClick(value);
    } else if (this.state.filterOrSort === "sort") {
      this.handleSortOptionClick(value);
    } else {
      return;
    }
  }
  handleFilterOptionClick(filterValue) {
    this.props.onFilterOptionClick(filterValue);
  }

  handleSortOptionClick(sortValue) {
    this.props.onSortOptionClick(sortValue);
  }
  renderOptionsList(list = []) {
    list = this.state.list;

    return (
      <ul className="options-list">
        {list.map((item, index) => {
          return (
            <li
              className="option-list-item"
              key={index}
              // onClick={() => this.handleSortOptionClick(item)}
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
