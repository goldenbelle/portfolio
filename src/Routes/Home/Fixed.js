import React from "react";
import styled, { keyframes } from "styled-components";

const Contents = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  z-index: -99;
  color: white;
`;

const Move = keyframes`  0% {
  transform: translate(-30%, 0);
}
50% {
  text-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}
100% {
  transform: translate(30%, 0);
}
}`;

const Words = styled.div`
  color: white;
  font-size: 0;
  font-weight: 800;
  line-height: 1.5;
`;

const Span = styled.div`
  font-size: 5rem;
  display: inline-block;
  animation: ${Move} 3s ease-in-out infinite;
  &:nth-child(1) {
    animation-delay: 0.5s;
  }
  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 1.5s;
  }
  &:nth-child(4) {
    animation-delay: 2s;
  }
  &:nth-child(5) {
    animation-delay: 2.5s;
  }
  &:nth-child(6) {
    animation-delay: 3s;
  }
  &:nth-child(7) {
    animation-delay: 3.5s;
  }
  &:nth-child(8) {
    animation-delay: 4s;
  }
  &:nth-child(9) {
    animation-delay: 4.5s;
  }
`;

export default () => {
  return (
    <>
      <Contents>
        <Words>
          <Span>M</Span>
          <Span>A</Span>
          <Span>R</Span>
          <Span>K</Span>
          <Span>E</Span>
          <Span>T</Span>
          <Span>I</Span>
          <Span>N</Span>
          <Span>G</Span>
        </Words>
        <Words>
          <Span>D</Span>
          <Span>E</Span>
          <Span>S</Span>
          <Span>I</Span>
          <Span>G</Span>
          <Span>N</Span>
        </Words>
        <Words>
          <Span>D</Span>
          <Span>E</Span>
          <Span>V</Span>
          <Span>E</Span>
          <Span>L</Span>
          <Span>O</Span>
          <Span>P</Span>
        </Words>
      </Contents>
    </>
  );
};
