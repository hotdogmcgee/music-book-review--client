import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
    //on click hide or grey out other buttons so search field takes up more space
  state = {
    initialItems: [],
    items: []
  };

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
      <div className="searchBox">
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
    );
  }
}
