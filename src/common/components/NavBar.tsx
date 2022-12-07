import React from "react";
import { logIn } from "../services/Auth";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          MusicApp
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/playlists">
                Playlists
              </a>
            </li>
          </ul>
          <div className="ms-auto navbar-text">
            <button className="btn btn-dark" onClick={logIn}>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
