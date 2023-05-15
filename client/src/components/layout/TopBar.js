import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link className="top-bar-text" to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link className = "top-bar-text" to="/users/new">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar top-bar-color">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="top-bar-text menu-nav-format" >Menu</li>
          <li>
            <Link className="top-bar-text app-name-text" to="/">Games On Sale</Link>
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
