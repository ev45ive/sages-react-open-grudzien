import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import NavBar from "./common/components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
