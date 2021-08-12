import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Header></Header>
          <AppBody>
            <Sidebar></Sidebar>
            <Switch>
              <Route path="/" exact>
                {/* Chat */}
              </Route>
            </Switch>
          </AppBody>
        </div>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
