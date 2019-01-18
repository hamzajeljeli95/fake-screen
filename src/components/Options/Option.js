import React from 'react';
import styled from 'styled-components';

const Option = ({ className, imgUrl, name, displayName }) => (
  <div className={className}>
    <div className="img-container">
      <img src={imgUrl} alt={name} />
    </div>
    <div className="title">{displayName}</div>
  </div>
);

export default styled(Option)`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 1.2px;
  box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.2);
  .img-container {
    position: absolute;
  }
  .img-container:after {
    transition: background 0.4s;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
  }
  .img-container:hover:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  .title {
    pointer-events: none;
    position: absolute;
    transition: all 0.4s;
    opacity: 0;
    top: 20%;
    left: 0;
    width: 100%;
    color: white;
    font-size: 1.5rem;
    text-shadow: black 1px 1px 2px;
    text-align: center;
  }
  &:hover .title {
    opacity: 1;
    top: 40%;
  }
`;
