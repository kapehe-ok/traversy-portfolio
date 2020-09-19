import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Content from "./components/Content";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SingleContent from "./components/SingleContent";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SingleContent} path="/content/:slug" />
        <Route component={Content} path="/content" />
        <Route component={Projects} path="/projects" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
