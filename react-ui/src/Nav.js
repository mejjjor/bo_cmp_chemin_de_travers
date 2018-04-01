import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <div className="navbar navbar-expand-lg static-top navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">Les chemins de travers – BackOffice</a>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
