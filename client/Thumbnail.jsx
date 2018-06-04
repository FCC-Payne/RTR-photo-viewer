import React from 'react';

const Thumbnail = props => (
  <div className="product-thumbnail">
    <img src={props.photo} />
  </div>
);

export default Thumbnail;