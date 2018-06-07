import React from 'react';

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objectFit: 'contain',
      objectPosition: '0% 0%',
      imgX: 0,
      imgY: 0,
      width: 0,
      height: 0,
      zoom: 1080,
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.wheel = this.wheel.bind(this);
  }

  mouseEnter(event) {
    const rect = event.target.getClientRects();
    this.setState({
      objectFit: 'none',
      imgX: rect[0].x,
      imgY: rect[0].y,
      width: rect[0].width,
      height: rect[0].height,
    });
  }

  mouseMove(event) {
    this.setState({
      objectPosition: `${(event.clientX - this.state.imgX) * 100 / this.state.width}% ${(event.clientY - this.state.imgY) * 100 / this.state.height}%`,
    });
  }

  mouseLeave(event) {
    this.setState({
      objectFit: 'contain',
      zoom: 1080,
    });
  }

  wheel(event) {
    event.preventDefault();
    if (event.deltaY > 0 && this.state.zoom > 480) {
      const newHeight = this.state.zoom - 20;
      this.setState({
        zoom: newHeight,
      });
    }
    if (event.deltaY < 0 && this.state.zoom < 1080) {
      const newHeight = this.state.zoom + 20;
      this.setState({
        zoom: newHeight,
      });
    }
  }

  render() {
    const style = {
      height: '720px',
      objectFit: this.state.objectFit,
      objectPosition: this.state.objectPosition,
    };
    return(
      <div className="featured-image-wrapper">
        <div className="featured-image-wrapper__center">
          <img 
            className="featured-image"
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
            onMouseMove={this.mouseMove}
            onWheel={this.wheel}
            style={style}
            srcSet={`${this.props.photo} 1080w`}
            sizes={`${this.state.zoom}px`}
          />
        </div>
      </div>
    );
  }
}

export default Featured;
