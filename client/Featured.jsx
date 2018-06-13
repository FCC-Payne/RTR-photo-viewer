import React from 'react';
import styled from 'styled-components';
import FeaturedZoom from './FeaturedZoom.jsx';
import FeaturedStatic from './FeaturedStatic.jsx';

const FeturedImgWrapperCenter = styled.div`
  margin-left: 25px;
  overflow: hidden;
`;

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
      <div>
        <FeturedImgWrapperCenter>
          <FeaturedStatic hide={this.showZoom} photo={this.props.photo} visibility={this.state.staticVisibility} opacity={this.state.staticOpacity} />
          <FeaturedZoom hide={this.hideZoom} photo={this.props.photo} visibility={this.state.zoomVisibility} opacity={this.state.zoomOpacity} />
        </FeturedImgWrapperCenter>
      </div>
    );
  }
}

export default Featured;
