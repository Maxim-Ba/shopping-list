import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppCC } from "./AppCC";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();
// history.push('/');

ReactDOM.render(
  // <Router history={history}>
    <Provider store={store}>
    <HashRouter>
      <AppCC />
    </HashRouter>
    </Provider>
  // </Router>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
