import React from 'react';

const Featured = (props) => (
  <div className="featured-image-wrapper">
    <div className="featured-image-wrapper__center">
      <img src={props.photo} />
    </div>
  </div>
);

export default Featured;