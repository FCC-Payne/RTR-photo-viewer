import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails.jsx';
import Featured from './Featured.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrls: [
        'https://i.imgur.com/ju29oAu.jpg',
        'http://images.unsplash.com/photo-1519612535780-b5d7d96c36f3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f6077f459202b771e15e74a79f2d9a9',
        'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/37936382/1/?bust=1499132738',
        'https://i.pinimg.com/originals/01/eb/65/01eb650cbc37e942c5bc3b419ae6bad5.jpg'
      ],
      featuredPhotoUrl: 'https://i.imgur.com/ju29oAu.jpg'
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