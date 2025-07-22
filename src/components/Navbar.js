import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === "darkBlue" ? "navbar-dark custom-darkblue-bg" : `navbar-${props.mode} bg-${props.mode}`}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className={`d-flex`}>
            <div style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={() => props.toggleMode('primary')} className="bg-primary rounded mx-2"></div>
            <div style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={() => props.toggleMode('danger')} className="bg-danger rounded mx-2"></div>
            <div style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={() => props.toggleMode('success')} className="bg-success rounded mx-2"></div>
            <div style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={() => props.toggleMode('warning')} className="bg-warning rounded mx-2"></div>
            <div style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={() => props.toggleMode('light')} className="bg-light rounded mx-2"></div>
            <div style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={() => props.toggleMode('dark')} className="bg-dark rounded mx-2"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

