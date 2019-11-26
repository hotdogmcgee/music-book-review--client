import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import {
  faBookOpen,
  faComment,
  faGift,
  faGlobeAmericas,
  faListOl,
  faListUl,
  faPenAlt,
  faQuoteLeft,
  faStar as fasStar,
} from '@fortawesome/free-solid-svg-icons'
import "./index.css";

library.add(faSearch,
  faGift, // logo
  faListUl, // style: listicle
  faListOl, // style: howto
  faGlobeAmericas, // style: news
  faPenAlt, // style: interview
  faBookOpen, // style: story
  faComment,
  faQuoteLeft,
  farStar,
  fasStar,);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
