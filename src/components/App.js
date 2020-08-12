import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Title from "./Title";
import HeroList from "../containers/HeroList";
import Footer from "./Footer";
import Author from "./Author";
import HeroDetails from "../containers/HeroDetails";
import HeroForm from "../containers/HeroForm";

const App = () => (
  <Router>
    <div className="App">
      <Title />
      <HeroForm />
      <Route exact path="/" component={HeroList} />
      <Route path="/about" component={Author} />
      <Route path="/details/:id" component={HeroDetails} />
      <Footer />
    </div>
  </Router>
);

export default App;
