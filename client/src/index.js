import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import setAuthenticationHeader from "./utils/authenticate";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import App from "./components/App";
import RequireAuth from "./components/RequireAuth";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let token = localStorage.getItem("jsonwebtoken");
setAuthenticationHeader(token);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <BaseLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mybooks" exact component={RequireAuth(App)} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route exact component={NotFound} />
        </Switch>
      </BaseLayout>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
