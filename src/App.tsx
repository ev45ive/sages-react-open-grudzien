import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      {/* .container>.row>.col>h3.display-3 */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="display-3">MusicApp</h3>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
