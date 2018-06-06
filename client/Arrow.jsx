import React from 'react';

const Arrow = props => {
  let divClassName = `thumb-controls thumb-${props.direction}`;
  !props.active ? divClassName += ' inactive' : null;
  return(
    <div className={divClassName}>
      <span className="arrow" onClick={() => props.scroll(props.direction)}></span>
    </div>
  );
};

export default Arrow;