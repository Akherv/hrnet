import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employeeSlice";
import { GlobalStyle } from "./globalStyle";

import { App } from "./App";

const store = configureStore({
  reducer: { employee: employeeReducer },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
