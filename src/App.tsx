import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import NavBar from "./common/components/NavBar";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";
import { Loader } from "./common/components/Loader";

function App() {
  // const { isFetching } = useQueryClient();
  const loader = useIsFetching();

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <p>{loader && "loading..."}</p>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
