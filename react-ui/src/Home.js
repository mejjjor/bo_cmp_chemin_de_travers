import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div className="container pb-5">
        <div className="row mt-5">
          <h1>Welcome !</h1>
        </div>
        <div className="card mt-5">
          <div className="card-header">
            <h2>Where I am ?</h2>
          </div>
          <div className="card-block p-4">
            <h4 className="card-title">Vous êtes sur le backoffice d&#39;une suberbe companie ! :)</h4>
            <p className="card-text">Vous devez surement chercher ce site&nbsp;:&nbsp;
              <a href="https://www.cheminsdetravers.org/">Les chemins de travers</a>
            </p>
          </div>
        </div>

        <div className="card mt-5">
          <div className="card-header">
            <h2>Who we are ?</h2>
          </div>
          <div className="card-block p-4">
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <a href="https://www.cheminsdetravers.org/" className="btn btn-primary">Lucille Brunet</a>
              </li>
              <li className="list-group-item">
                <a href="https://www.manoel-artiste.fr/" className="btn btn-primary">Manoel Mathis</a>
              </li>
              <li className="list-group-item">
                <a href="https://www.erik-aouizerate.me" className="btn btn-primary">Erik Aouizerate</a><
              /li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
