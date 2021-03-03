import React from "react";
import "./App.css";
import "./components/styles.css"


import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const App = () => {
  document.title = "Rachael McIlhagga Portfolio";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
