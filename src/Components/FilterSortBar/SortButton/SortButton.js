import React from "react";

export default class SortButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    setOptions: () => {},
    showOptions: () => {},
    toggleShowOptions: () => {}
  };

  handleClick() {
    const list = ["id", "title", "rating"];
    this.props.setOptions(list);
    this.props.toggleShowOptions()
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <button>Sort</button>
      </div>
    );
  }
}
