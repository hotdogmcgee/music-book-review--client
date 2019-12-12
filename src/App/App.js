import React from "react";
import { Route, Switch } from "react-router-dom";
import BookListContext from '../Contexts/BookListContext'
import HomePage from "../Routes/HomePage/HomePage";
import Header from "../Components/Header/Header.js";
import CategoryPage from "../Routes/CategoryPage/CategoryPage.js";
import BookPage from "../Routes/BookPage/BookPage";

import "./App.css";
import NotFoundPage from "../Routes/NotFoundPage/NotFoundPage";
// import PrivateRoute from "../Components/Utils/PrivateRoute";
// import LoginModal from "../Routes/LoginModal/LoginModal";
import ProfilePage from "../Routes/ProfilePage/ProfilePage";
import LoginPage from "../Routes/LoginPage/LoginPage";
import { STORE  } from '../store.js'


//browse value change in context

class App extends React.Component {
  state = {
    hasError: false,
    hasLogin: false,
    showModal: false,

    loading: false,
      error: null,
      browseCategory: null
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  static contextType = BookListContext

  componentDidMount() {
    this.context.clearError()
    this.context.setBookList(STORE.bookList)
    this.context.setSavedList(STORE.bookList)
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

  render() {
    return (
      <div className="App">
        <header className="App__header">
          
          <Header toggleModal={this.toggleModal}></Header>
        </header>
        <main className="App__main">
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/category/:type"} component={CategoryPage} />
            {/* <PrivateRoute path={'/my-profile'} component={ProfilePage}/> */}
            <Route path={"/my-profile"} component={ProfilePage} />
            <Route
              path={"/category/instrument/:instrument"}
              component={CategoryPage}
            />
            <Route path={'/login'} render={props => (
              <LoginPage {...props} hasLogin={this.hasLogin} />
            )} />
            <Route path={"/book/:bookId"} component={BookPage} />
            <Route path={"*"} component={NotFoundPage} />
          </Switch>
        </main>
        <div className="ReactModalPortal">
          {/* <LoginModal open={this.state.showModal} onClose={this.toggleModal}>
            {" "}
            Test Modal
          </LoginModal> */}

        </div>
      </div>
    );
  }
}

export default App;
