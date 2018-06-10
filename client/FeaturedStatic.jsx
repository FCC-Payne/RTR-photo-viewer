import React from 'react';

const FeaturedStatic = props => {
  const style = {
    display: props.display,
    opacity: props.opacity,
  }
  return(<img className="featured-image" style={style} src={props.photo} onMouseEnter={props.hide} />);
};

export default FeaturedStatic;
