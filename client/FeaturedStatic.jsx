import React from 'react';
import styled from 'styled-components';

const FeaturedImg = styled.img`
  position: absolute;
  height: 720px;
  object-fit: contain;
  transition: all ease 0.5s;
`;

const FeaturedStatic = props => {
  const style = {
    display: props.display,
    opacity: props.opacity,
  }
  return(<FeaturedImg style={style} src={props.photo} onMouseEnter={props.hide} />);
};

export default FeaturedStatic;
