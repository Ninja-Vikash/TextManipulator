import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand fw-bolder text-${props.mode==='light'?'dark':'light'}`}>{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon text-${props.mode==='light'?'dark':'light'}`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`}>About</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="myBox">
                {props.modeName}
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
