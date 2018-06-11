import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './Thumbnails.jsx';
import Featured from './Featured.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrls: [],
      featuredPhotoUrl: '',
    };
    this.getPhotoUrls = this.getPhotoUrls.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
  }

  getPhotoUrls(imageId) {
    axios.get(`http://localhost:3001/${imageId}/photos`)
      .then(response => {
        this.setState({
          photoUrls: response.data,
          featuredPhotoUrl: response.data[0],
        })
      });
  }

  componentDidMount() {
    let path = document.location.pathname.slice(1, 4);
    this.getPhotoUrls(path);
  }

  changePhoto(url) {
    this.setState({
      featuredPhotoUrl: url
    });
  }

  render() {
    return(
      <div className="product-images">
        <Thumbnails scroll={this.thumbnailScroll} changePhoto={this.changePhoto} photos={this.state.photoUrls} />
        <Featured photo={this.state.featuredPhotoUrl}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
