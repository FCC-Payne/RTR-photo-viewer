import React from 'react';
import Thumbnail from './Thumbnail.jsx'

const Thumbnails = (props) => (
  <div className="thumbnails">
    <div className="thumb-controls thumb-prev">
      <img onClick={() => props.scroll('prev')} src="http://icons.iconarchive.com/icons/icons8/android/24/Arrows-Collapse-2-icon.png" />
    </div>
    <div className="thumb-viewport">
      <div className="product-thumbnails">
        {props.photos.map((photo, key) => 
          <Thumbnail clickHandler={props.changePhoto} key={key} photo={photo} />)}
      </div>
    </div>
    <div className="thumb-controls thumb-next">
      <img onClick={() => props.scroll('next')} src="http://icons.iconarchive.com/icons/icons8/android/24/Arrows-Collapse-2-icon.png" />
    </div>
  </div>
);

export default Thumbnails;