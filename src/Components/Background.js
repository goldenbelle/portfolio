import React from "react";
import styled from "styled-components";
import Clouds from "../Assets/Clouds.mp4";

const Video = styled.video`
  width: 100%;
  height: 100%;
  top: 0%;
  opacity: 0.8;
  z-index: -99;
  object-fit: cover;
  position: fixed;
`;

export default () => {
  return (
    <>
      <Video autoPlay loop muted>
        <source src={Clouds} type="video/mp4" />
      </Video>
    </>
  );
};
