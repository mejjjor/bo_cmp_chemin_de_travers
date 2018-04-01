import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>Made by <a href="http://erik-aouizerate.me">Erik Aouizerate</a>.</p>
            <p>Propulsed by <a href="https://www.heroku.com/">Heroku</a>.</p>
            <p>Bootstraped from <a href="https://github.com/mars/create-react-app-buildpack">create-react-app-buildpack</a>.</p>
            <p>Based on <a href="https://bootswatch.com/darkly/">bootswatch – darkly</a>.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
