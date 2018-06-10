import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import Arrow from './Arrow.jsx';

class Thumbnails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayed: [],
      displayedIndices: [],
      nextActive: false,
      prevActive: false,
    };
    this.scroll = this.scroll.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.photos !== prevProps.photos) {
      this.setState({
        displayed: this.props.photos.slice(0, 3),
        displayedIndices: [0, 3],
      }, this.activateArrows);
    }
  }

  activateArrows() {
    let next;
    let prev;
    this.state.displayedIndices[0] === 0 ? prev = false : prev = true;
    this.state.displayedIndices[1] === this.props.photos.length ? next = false : next = true;
    this.setState({
      nextActive: next,
      prevActive: prev,
    });
  }

  scroll(direction) {
    let indices = this.state.displayedIndices;
    if (direction === 'prev' && this.state.prevActive) {
      indices[0] -= 1;
      indices[1] -= 1;
    } else if (direction === 'next' && this.state.nextActive) {
      indices[0] += 1;
      indices[1] += 1;
    }
    let thumbnails = this.props.photos.slice(indices[0], indices[1]);
    this.setState({
      displayed: thumbnails,
      displayedIndices: indices,
    }, this.activateArrows);
  }

  render() {
    return(
      <div className="thumbnails">
        <Arrow direction="prev" scroll={this.scroll} active={this.state.prevActive} />
        <div className="thumb-viewport">
          <div className="product-thumbnails">
            {this.state.displayed.map((photo, key) => 
              <Thumbnail clickHandler={this.props.changePhoto} key={key} photo={photo} />)}
          </div>
        </div>
        <Arrow direction="next" scroll={this.scroll} active={this.state.nextActive} />
      </div>
    );
  }
};

export default Thumbnails;
