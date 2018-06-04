import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="product-images">
        <div className="thumbnails">
          <div className="thumb-controls thumb-prev"></div>
          <div className="thumb-viewport">
            <div className="product-thumbnails">
              <div className="product-thumbnail">Thumbnail 1</div>
              <div className="product-thumbnail">Thumbnail 2</div>
              <div className="product-thumbnail">Thumbnail 3</div>
              <div className="product-thumbnail">Thumbnail 4</div>
            </div>
          </div>
          <div className="thumb-controls thumb-next"></div>
        </div>
        <div className="featured-image-wrapper">
          <div className="featured-image-wrapper__center"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));