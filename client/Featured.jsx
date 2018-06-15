import React from 'react';
import FeaturedZoom from './FeaturedZoom.jsx';
import FeaturedStatic from './FeaturedStatic.jsx';

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomOpacity: 0,
      zoomVisibility: 'hidden',
      staticOpacity: 1,
      staticVisibility: 'visible',
    };

    this.showZoom = this.showZoom.bind(this);
    this.hideZoom = this.hideZoom.bind(this);
  }

  showZoom() {
    this.setState({
      zoomOpacity: 1,
      zoomVisibility: 'visible',
      staticOpacity: 0,
      staticVisibility: 'hidden',
    });
  }

  hideZoom() {
    this.setState({
      zoomOpacity: 0,
      zoomVisibility: 'hidden',
      staticOpacity: 1,
      staticVisibility: 'visible',
    });
  }

  render() {
    return(
      <div className="featured-image-wrapper">
        <div className="featured-image-wrapper__center">
          <FeaturedStatic hide={this.showZoom} photo={this.props.photo} visibility={this.state.staticVisibility} opacity={this.state.staticOpacity} />
          <FeaturedZoom hide={this.hideZoom} photo={this.props.photo} visibility={this.state.zoomVisibility} opacity={this.state.zoomOpacity} />
        </div>
      </div>
    );
  }
}

export default Featured;
