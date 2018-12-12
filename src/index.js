import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  state = {
    lat: null,
    long: null,
    errorMessage: null
  };

  componentDidMount() {
    console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      err => {
        console.error(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!');
  }

  componentWillUnmount() {}

  renderContent = () => {
    let content = <Spinner message="Please accept loaction request" />;
    if (this.state.errorMessage) {
      content = (
        <h3 style={{ color: 'red', fontWeight: 'bold' }}>
          Erorr: {this.state.errorMessage}
        </h3>
      );
    } else if (this.state.lat) {
      content = <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }
    return content;
  };

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
