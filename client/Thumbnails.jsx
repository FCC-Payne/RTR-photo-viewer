import React from 'react';
import Thumbnail from './Thumbnail.jsx'

const Thumbnails = (props) => (
  <div className="thumbnails">
    <div className="thumb-controls thumb-prev">
      <span class="arrow"></span>
    </div>
    <div className="thumb-viewport">
      <div className="product-thumbnails">
        {props.photos.map((photo, key) => 
          <Thumbnail clickHandler={props.changePhoto} key={key} photo={photo} />)}
      </div>
    </div>
    <div className="thumb-controls thumb-next">
      <span className="arrow"></span> 
    </div>
  </div>
);

export default Thumbnails;