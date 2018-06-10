import React from 'react';

const Thumbnail = props => (
  <div className="product-thumbnail">
    <img onClick={() => props.clickHandler(props.photo)} width="85" src={props.photo} />
  </div>
);

export default Thumbnail;
