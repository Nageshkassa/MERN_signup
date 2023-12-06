import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="data-container">
        <h2>Nagesh</h2>
        <div id="menu-time" className="menu-data animate__animated">
          <Link to="/login" className="btn btn-success">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success">
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
