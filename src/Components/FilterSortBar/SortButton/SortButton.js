import React from "react";

export default class SortButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    setOptions: () => {},
    showOptions: () => {}
  };

  handleClick() {
    const list = ["yo", "hey", "thing"];
    this.props.setOptions(list);
    this.props.showOptions();
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <button>Sort</button>
      </div>
    );
  }
}
