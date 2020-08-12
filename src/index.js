import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./components/App";
import storage from "./localStorage/storage";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { createStore } from "redux";

const persistState = storage.loadState();

const store = createStore(rootReducer, persistState);

store.subscribe(() => {
  storage.saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

export { store };
