import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 20px;
  height: 50%;
  padding: 30px;
`;

export default () => {
  return (
    <>
      <Zoom>NEVER STOP LEARNING</Zoom>
      <Contents></Contents>
    </>
  );
};
