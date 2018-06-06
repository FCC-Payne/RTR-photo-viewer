import React from 'react';

const Featured = (props) => (
  <div className="featured-image-wrapper">
    <div className="featured-image-wrapper__center">
      <img className="featured-image" width="480" src={props.photo} />
    </div>
  </div>
);

export default Featured;
