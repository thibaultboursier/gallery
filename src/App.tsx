import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home/Home";
import Paintings from "./Paintings/Paintings";
import About from "./About/About";

const App: React.StatelessComponent = () => (
  <Router>
    <div className="App">
      <header>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/paintings" component={Paintings} />
      </header>
    </div>
  </Router>
);

export default App;
