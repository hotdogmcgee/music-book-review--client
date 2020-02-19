import React from "react";
import { Button } from "../../Utils/Utils";

export default class SortButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    setOptions: () => {},
    showOptions: () => {},
    toggleShowOptions: () => {},
    toggleFilterOrSort: () => {}
  };

  handleClick() {
    const list = ["title", "rating", "authors"];
    this.props.toggleFilterOrSort("sort");
    this.props.setOptions(list);
    this.props.toggleShowOptions();
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <Button>Sort</Button>
      </div>
    );
  }
}
