import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails.jsx';
import Featured from './Featured.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrls: ['this', 'is', 'mock', 'data'],
      featuredPhotoUrl: 'phony', 
    };
  }

  render() {
    return(
      <div className="product-images">
        <Thumbnails photos={this.state.photoUrls}/>
        <Featured photo={this.state.featuredPhotoUrl}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));