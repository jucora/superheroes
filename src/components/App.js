import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Title from "./Title";
import HeroList from "../containers/HeroList";
import Footer from "./Footer";
import Author from "./Author";
import HeroDetails from "../containers/HeroDetails";
import HeroForm from "../containers/HeroForm";
import storage from "../localStorage/storage";
import rootReducer from "../reducers/index";

const persistState = storage.loadState();

let store = createStore(rootReducer, persistState());

store.subscribe(() => {
  storage.saveState(store.getState());
});

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Title />
        {window.location.pathname === "/" ? <HeroForm /> : null}
        <Route exact path="/" component={HeroList} />
        <Route path="/about" component={Author} />
        <Route path="/details/:id" component={HeroDetails} />

        <Footer />
      </div>
    </Router>
  </Provider>
);

export { store };
export default App;
