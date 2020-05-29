import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./scss/styles.scss";
import { MainMenu } from "./components/MainMenu";
import { MainFooter } from "./components/MainFooter";

function App() {
  return (
    <div className="App">
      <Router>
        <MainMenu />
        
          <Routes />
        
        <MainFooter />
      </Router>
    </div>
  );
}

export default App;
