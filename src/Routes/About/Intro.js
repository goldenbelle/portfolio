import React from "react";
import styled, { keyframes } from "styled-components";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Title = styled.div`
  font-size: 7vw;
  font-weight: 600;
  padding-bottom: 20px;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

const Btn = styled.div`
  border: 1px solid white;
  color: white;
  font-size: 10px;
  padding: 10px;
`;

export default () => {
  return (
    <>
      <Contents>
        <Title>About Byul</Title>
        <Btn>Download Resume</Btn>
      </Contents>
    </>
  );
};
