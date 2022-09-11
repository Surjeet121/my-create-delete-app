import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <div className="container-fluid">
      <ul className="navbar">
        <li id="nav_login">
          <NavLink to="/">Login</NavLink>
        </li>

        <li className="nav_itom">
          <NavLink to="/createuser">CreateUser</NavLink>
        </li>

        <li className="nav_itom">
          <NavLink to="/userlist">UserList</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
