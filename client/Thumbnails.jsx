import React from 'react';
import Thumbnail from './Thumbnail.jsx'

const Thumbnails = (props) => (
  <div className="thumbnails">
    <div className="thumb-controls thumb-prev"></div>
    <div className="thumb-viewport">
      <div className="product-thumbnails">
        {props.photos.map((photo, key) => 
          <Thumbnail key={key} photo={photo} />)}
      </div>
    </div>
    <div className="thumb-controls thumb-next"></div>
  </div>
);

export default Thumbnails;