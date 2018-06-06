import React from 'react';

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: '720px',
        objectFit: 'contain',
      },
      imgX: 0,
      imgY: 0,
      width: 0,
      height: 0,
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(event) {
    const rect = event.target.getClientRects();
    this.setState({
      imgX: rect[0].x,
      imgY: rect[0].y,
      width: rect[0].width,
      height: rect[0].height,
    });
  }

  mouseMove(event) {
    this.setState({
      style: {
        height: '720px',
        objectFit: 'none',
        objectPosition: `${(event.clientX - this.state.imgX) * 100 / this.state.width}% ${(event.clientY - this.state.imgY) * 100 / this.state.height}%`,
      },
    });
  }

  mouseLeave(event) {
    this.setState({
      style: {
        height: '720px',
        objectFit: 'contain',
      },
    });
  }

  render() {
    return(
      <div className="featured-image-wrapper">
        <div className="featured-image-wrapper__center">
          <img onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseMove={this.mouseMove} style={this.state.style} className="featured-image" src={this.props.photo} />
        </div>
      </div>
    );
  }
}

export default Featured;
