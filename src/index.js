import { render } from "react-dom";
import React from "react";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import "./stylesheets/style.css"

store.subscribe(() => {
  localStorage.setItem("myTodos", JSON.stringify(store.getState()));
});

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
