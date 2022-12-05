import React from "react";
import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      {/* .container>.row>.col>h3.display-3 */}
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{ width: "110px", float: "left" }}
            />
            <h3 className="display-3">MusicApp</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
