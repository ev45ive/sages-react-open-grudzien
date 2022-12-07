import React from "react";
import { NavLink } from "react-router-dom";
import { UserWidget } from "./UserWidget";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          MusicApp
        </NavLink>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/playlists">
                Playlists
              </NavLink>
            </li>
          </ul>
          <div className="ms-auto navbar-text">
            <UserWidget />
            <UserWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
