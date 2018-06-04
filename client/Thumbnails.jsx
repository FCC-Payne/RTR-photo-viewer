import React from 'react';

const Thumbnails = (props) => (
  <div className="thumbnails">
    <div className="thumb-controls thumb-prev"></div>
    <div className="thumb-viewport">
      <div className="product-thumbnails">
        <div className="product-thumbnail">Thumbnail 1</div>
        <div className="product-thumbnail">Thumbnail 2</div>
        <div className="product-thumbnail">Thumbnail 3</div>
        <div className="product-thumbnail">Thumbnail 4</div>
      </div>
    </div>
    <div className="thumb-controls thumb-next"></div>
  </div>
);

export default Thumbnails;