import React from "react";

export default class FilterButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  static defaultProps = {
    setOptions: () => {},
    showOptions: () => {}
  };
  handleClick() {
    const list = ['new', 'cool', 'wow']
    this.props.setOptions(list)
    this.props.showOptions()
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <button>Filter</button>

      </div>
    );
  }
}
