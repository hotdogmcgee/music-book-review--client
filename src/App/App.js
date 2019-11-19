import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from '../Routes/HomePage/HomePage'
import Header from "../Components/Header/Header.js";
import "./App.css";
import NotFoundPage from "../Routes/NotFoundPage/NotFoundPage";

class App extends React.Component {
  state = {
    hasError: false,
    hasLogin: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

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
            <Route path={"*"} component={NotFoundPage}/>
          </Switch>
        </main>
        <div class="ReactModalPortal"></div>
      </div>
    );
  }
}

export default App;
