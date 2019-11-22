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
      list: []
    };

    this.handleShowOptions = this.handleShowOptions.bind(this);
    this.handleHideOptions = this.handleHideOptions.bind(this);
    this.handleSetOptions = this.handleSetOptions.bind(this);
  }

  handleShowOptions() {
    // event.preventDefault();

    this.setState({ displayOptions: true }, () => {
      document.addEventListener("click", this.handleHideOptions);
    });
  }

  handleHideOptions() {
    this.setState({ displayOptions: false }, () => {
      document.removeEventListener("click", this.handleHideOptions);
    });
  }

  handleSetOptions(list) {
    this.setState({
      list
    });
  }
  renderOptionsList(list = []) {
    list = this.state.list;
    return (
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  }
  render() {
    return (
      <Section id="filter-sort-bar">
        <div className="filter-sort-buttons">
          <FilterButton
            showOptions={this.handleShowOptions}
            setOptions={this.handleSetOptions}
          />
          <SortButton
            showOptions={this.handleShowOptions}
            setOptions={this.handleSetOptions}
          />
        </div>
        <div>{this.state.displayOptions ? this.renderOptionsList() : null}</div>
      </Section>
    );
  }
}
