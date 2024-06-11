import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Chrome from "./Root";
import Safari from "./Safari";
import Dashboard from "./Dashboard";

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element = {<Dashboard/>}>
        </Route>
        {/* <Route path="/" element = {<Chrome parentCallback={callbackFunction} />} /> */}
        <Route path="/" element = {<Safari parentCallback={callbackFunction} />} />
        <Route path="/default" element = {<center><h1>Welcome</h1></center>}  /> 
      </Routes>
    </Router>
  );
};

export default App;
