import React, { Component } from 'react';
import Nav from "./Nav"
import Home from "./Home"
import Footer from "./Footer"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container" >
          <Home />
          <hr class="my-4 bg-primary" />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
