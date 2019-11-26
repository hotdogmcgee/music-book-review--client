import React from "react";

export default class FilterButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  static defaultProps = {
    setOptions: () => {},
    toggleShowOptions: () => {},
    toggleFilterOrSort: () => {}
  };
  handleClick() {
    const list = ['under 25 dollars', 'old books', 'recent']
    this.props.toggleFilterOrSort('filter')
    this.props.setOptions(list)
    this.props.toggleShowOptions()
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <button>Filter</button>

      </div>
    );
  }
}
