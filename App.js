import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Header from "./Components/Common/Header";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
    </div>
  );
}

export default App;
