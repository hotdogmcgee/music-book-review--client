import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App.js";
import * as serviceWorker from "./serviceWorker";
import { BookListProvider } from "./Contexts/BookListContext";
import { BookProvider } from "./Contexts/BookContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import {
  faComment,
  faQuoteLeft,
  faStar as fasStar
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

library.add(faSearch, faWrench, faComment, faQuoteLeft, farStar, fasStar);
ReactDOM.render(
  <BrowserRouter>
    <BookListProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </BookListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
