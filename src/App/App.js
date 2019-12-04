import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from '../Routes/HomePage/HomePage'
import Header from "../Components/Header/Header.js";
import CategoryPage from '../Routes/CategoryPage/CategoryPage.js'
import BookPage from '../Routes/BookPage/BookPage'

import "./App.css";
import NotFoundPage from "../Routes/NotFoundPage/NotFoundPage";
import PrivateRoute from "../Components/Utils/PrivateRoute";
import LoginModal from '../Routes/LoginModal/LoginModal'
import ProfilePage from '../Routes/ProfilePage/ProfilePage'

class App extends React.Component {
  state = {
    hasError: false,
    hasLogin: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  hasLogin = loggedIn => {
    this.setState({
      hasLogin: loggedIn
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header>

          </Header>
        </header>
        <main className="App__main">
          <Switch>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/category/:type"} component={CategoryPage}/>
            <Route
              path={"/login"}
              render={props => (
                <LoginModal {...props} hasLogin={this.hasLogin} />
              )}
            />
            {/* <PrivateRoute path={'/my-profile'} component={ProfilePage}/> */}
            <Route path={'/my-profile'} component={ProfilePage}/>
            <Route path={"/category/instrument/:instrument"} component={CategoryPage}/>
            <Route path={"/book/:bookId"} component={BookPage} />
            <Route path={"*"} component={NotFoundPage}/>
            
          </Switch>
        </main>
        <div className="ReactModalPortal"></div>
      </div>
    );
  }
}

export default App;
