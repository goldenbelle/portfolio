import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Contents = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  z-index: -99;
`;

export default () => {
  return (
    <>
      <Contents>DESIGN DEVELOP MARKETING</Contents>
    </>
  );
};
