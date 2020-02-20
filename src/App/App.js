import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Routes/HomePage/HomePage";
import Header from "../Components/Header/Header.js";
import CategoryPage from "../Routes/CategoryPage/CategoryPage.js";
import BookPage from "../Routes/BookPage/BookPage";
import AboutPage from "../Routes/AboutPage/AboutPage";
import "./App.css";
import NotFoundPage from "../Routes/NotFoundPage/NotFoundPage";
import PrivateRoute from "../Components/Utils/PrivateRoute";
import ProfilePage from "../Routes/ProfilePage/ProfilePage";
import BooksApiService from "../services/books-api-service";
import BookListContext from "../Contexts/BookListContext";
import BurgerMenu from "../Components/Header/BurgerMenu/BurgerMenu";
import LoginModal from "../Components/LoginModal/LoginModal";

class App extends React.Component {
  state = {
    hasError: false,
    hasLogin: false,
    showModal: false,
    showLoginModal: false,

    loading: false,
    error: null,
    browseCategory: null
  };
  static contextType = BookListContext;

  componentDidMount() {
    BooksApiService.getBooks().then(this.context.setBookList);
    BooksApiService.getBooks().then(this.context.setSavedList);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  hasLogin = loggedIn => {
    this.setState({
      hasLogin: loggedIn
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  openModal() {
    this.setState({
      showModal: true
    });
  }

  showModal = () => {
    this.setState({ showLoginModal: true });
  };

  hideModal = () => {
    this.setState({ showLoginModal: false });
  };

  render() {
    return (
      <div className="App">
        <BurgerMenu showModal={this.showModal} hasLogin={this.hasLogin} />
        <div className="header-wrapper">
          <header className="App__header">
            {/* conditionally show search bar in Header by passing in a prop based on path */}
            <Switch>
              <Route
                path={["/about", "/my-profile", "/book"]}
                render={props => (
                  <Header
                    {...props}
                    showSearchBar={false}
                    hasLogin={this.hasLogin}
                    showModal={this.showModal}
                  />
                )}
              />
              <Route
                path={"*"}
                render={props => (
                  <Header
                    {...props}
                    showSearchBar={true}
                    hasLogin={this.hasLogin}
                    showModal={this.showModal}
                  />
                )}
              />
            </Switch>
          </header>
        </div>

        <main className="App__main">
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/category/:type"} component={CategoryPage} />
            <PrivateRoute path={"/my-profile"} component={ProfilePage} />
            <Route path={"/about"} component={AboutPage} />
            <Route
              path={"/category/instrument/:instrument"}
              component={CategoryPage}
            />
            <Route exact path={"/book/:bookId"} component={BookPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>

        <LoginModal
          handleClose={this.hideModal}
          show={this.state.showLoginModal}
          //some prop drilling here
          hasLogin={this.hasLogin}
        />
        <footer id="footer">
          <a
            target="blank"
            className="portfolio-link"
            href="https://hotdogmcgee.github.io/Portfolio-Website/"
          >
            &copy; Kevin Robinson 2020
          </a>
        </footer>
        <button className="scroll-top" data-scroll="up" type="button">
          <span>Top</span>
        </button>
      </div>
    );
  }
}



export default App;
