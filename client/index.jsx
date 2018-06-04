import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails.jsx';
import Featured from './Featured.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="product-images">
        <Thumbnails />
        <Featured />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));