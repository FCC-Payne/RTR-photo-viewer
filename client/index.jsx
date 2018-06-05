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
      displayedThumbnailIndices: [],
      displayedThumbnails: [],
      featuredPhotoUrl: '',
    };
    this.getPhotoUrls = this.getPhotoUrls.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
    this.thumbnailScroll = this.thumbnailScroll.bind(this);
  }

  getPhotoUrls(imageId) {
    axios.get(`http://localhost:3001/${imageId}`)
      .then(response => {
        this.setState({
          photoUrls: response.data,
          displayedThumbnailIndices: [0, 3],
          displayedThumbnails: response.data.slice(0, 3),
          featuredPhotoUrl: response.data[0],
        })
      });
  }

  componentDidMount() {
    this.getPhotoUrls(105);
  }

  changePhoto(url) {
    this.setState({
      featuredPhotoUrl: url
    });
  }

  thumbnailScroll(direction) {
    let displayedIndices = this.state.displayedThumbnailIndices;
    let currentThumbnails = this.state.displayedThumbnails;
    if (direction === 'next' && displayedIndices[1] !== this.state.photoUrls.length) {
      displayedIndices[0] += 1;
      displayedIndices[1] += 1;
    } else if (direction === 'prev' && displayedIndices[0] !== 0) {
      displayedIndices[0] -= 1;
      displayedIndices[1] -= 1;
    }
    currentThumbnails = this.state.photoUrls.slice(displayedIndices[0], displayedIndices[1]);
    this.setState({
      displayedThumbnailIndices: displayedIndices,
      displayedThumbnails: currentThumbnails
    });
  }

  render() {
    return(
      <div className="product-images">
        <Thumbnails scroll={this.thumbnailScroll} changePhoto={this.changePhoto} photos={this.state.displayedThumbnails} />
        <Featured photo={this.state.featuredPhotoUrl}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));