import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Background from "../Components/Background";

const SlideUp = keyframes`
from {
  right: 100px;
  opacity: 0;
}

to {
  right: 0px;
  opacity: 1;
}
`;

const SlideDown = keyframes`
from {
  left: 100px;
  opacity: 0;
}

to {
  left: 0;
  opacity: 1;
}
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLink = styled(Link)`
  padding: 10px;
`;

const H1 = styled.h1`
  position: relative;
  animation: ${SlideUp} 2s ease-in-out;
  font-size: 50px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  &:hover {
    color: white;
  }
`;

const H2 = styled.h1`
  position: relative;
  animation: ${SlideDown} 2s ease-in-out;
  font-size: 50px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  &:hover {
    color: white;
  }
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Div>
      <Background />
      <Left>
        <SLink to="portfolio/web">
          <H1>Web</H1>
        </SLink>
      </Left>
      <Right>
        <SLink to="portfolio/graphic">
          <H2>Graphic</H2>
        </SLink>
      </Right>
    </Div>
  );
};
