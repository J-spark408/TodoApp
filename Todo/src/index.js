import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store/store";
import Modal from 'react-modal';

const container = document.getElementById("root");
const root = createRoot(container);
Modal.setAppElement('#root');
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
