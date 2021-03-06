import React from "react";
import "./App.css";
import "./components/styles.css"


import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const App = () => {
  document.title = "Rachael McIlhagga Portfolio";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
};

export default App;
