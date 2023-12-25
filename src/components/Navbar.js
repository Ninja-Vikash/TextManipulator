import React from "react";

export default function Navbar(props) {
  let modeClass = props.mode === 'dark'?'sun':'moon';
  let textColor = props.mode === 'light'?'dark':'light';

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand fw-bolder text-${textColor}`}>{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${textColor}`} aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${textColor}`}>About</a>
              </li>
            </ul>

            <div className="form-check form-switch">
              <label className={`form-check-label text-${textColor}`} htmlFor="myBox">
              <i className={`ri-${modeClass}-fill`}></i>
              </label>
              <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="myBox"
              onClick={props.toggleMode}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
