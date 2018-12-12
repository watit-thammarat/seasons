import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  const { lat, long, errorMessage } = useLocation();
  let content = <Spinner message="Please accept loaction request" />;
  if (errorMessage) {
    content = (
      <h3 style={{ color: 'red', fontWeight: 'bold' }}>
        Erorr: {errorMessage}
      </h3>
    );
  } else if (lat) {
    content = <SeasonDisplay lat={lat} long={long} />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
