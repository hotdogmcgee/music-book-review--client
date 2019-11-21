import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  //on click hide or grey out other buttons so search field takes up more space
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      items: [],
      searchValue: "",
      mouseOverBoolean: false,
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  //doesnt work because function has been defined before state?
  //   log(e) {
  //       e.preventDefault()
  //     const thing = this.state.searchValue
  //     console.log(thing);
  //   }

  handleInput = e => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      searchValue: value
    });
    console.log(this.state.searchValue);
    // this.props.onSearchChange(searchValue);
  };

  //   handleToggle() {
  //       const newVal = !this.state.mouseOverBoolean
  //       this.setState({
  //           mouseOverBoolean: newVal
  //       })
  //       console.log('toggle');
  //   }

  handleMouseOver() {
    if (this.state.mouseOverBoolean) {
      return;
    } else {
      this.setState({
        mouseOverBoolean: true
      });
      this.props.onSearchBarFocus();
    }
  }

  handleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }))
    this.props.onSearchBarFocus(this.state.isHovered);
  }

  // filterList = (event) => {
  //   let items = this.state.initialItems;
  //   items = items.filter((item) => {
  //     return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
  //   });
  //   this.setState({items: items});
  // }

  // componentWillMount = () => {
  //   this.setState({
  //       initialItems: this.props.content,
  //       items: this.props.content
  //   })
  // }

  render() {
    return (
      //   <form id="searchForm" onSubmit={this.log}>
      <div
        className="searchBox"
        onChange={this.handleInput}
        // onMouseOver={this.handleMouseOver}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
        ></input>
        <button className="searchButton" href="#">
          <FontAwesomeIcon
            className="material-icons"
            icon="search"
            flip="horizontal"
          />
        </button>
      </div>
      //   </form>
    );
  }
}
