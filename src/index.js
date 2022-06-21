import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import 'antd/dist/antd.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./rootReducer";
// import 'bootstrap/dist/css/bootstrap.min.css';

export const store = createStore(RootReducer);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

