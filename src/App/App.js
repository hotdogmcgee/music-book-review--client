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

//browse value change in context

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

  // toggleBurger = () => {
  //   this.setState({ openBurger: !this.state.openBurger})
  // }

  hideModal = () => {
    this.setState({ showLoginModal: false });
  };

  render() {
    return (
      <div className="App">
        <BurgerMenu showModal={this.showModal} hasLogin={this.hasLogin} />
        <header className="App__header">
          <Header hasLogin={this.hasLogin}/>
        </header>
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
            {/* Not Found Page doesn't render with unfound bookId */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>

        <LoginModal
          handleClose={this.hideModal}
          show={this.state.showLoginModal}
          //some prop drilling here
          hasLogin={this.hasLogin}
        />
        <footer id="footer" role="content-info">
          <a
            target="blank"
            className="portfolio-link"
            href="https://hotdogmcgee.github.io/Portfolio-Website/"
          >
            &copy; Kevin Robinson 2020
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
