import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";


const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link className="top-bar-text" to="/user-sessions/new">Sign In</Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar top-bar-color">
     <img src="https://i.imgur.com/4sVNEMY.png" className="img-size" alt="Games on sale logo"/>
      <div className="top-bar-left top-bar-format">
        <ul className="menu">
          <li>
          <Link className="top-bar-text menu-nav-format" to="/" >Games On Sale</Link>
          </li>
          <li>
            <Link className="top-bar-text app-name-text games-on-sale-text" to="/games">See Our Collection </Link>
          </li>
          <li>
            <Link className="top-bar-text app-name-text games-on-sale-text" to="/search"> Search </Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right top-bar-text">
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
