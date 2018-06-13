import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Thumbnails from './Thumbnails.jsx';
import Featured from './Featured.jsx';

const ProductImages = styled.div`
  display: flex;
`;

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
      <ProductImages>
        <Thumbnails scroll={this.thumbnailScroll} changePhoto={this.changePhoto} photos={this.state.photoUrls} />
        <Featured photo={this.state.featuredPhotoUrl}/>
      </ProductImages>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
