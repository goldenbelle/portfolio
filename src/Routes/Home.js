import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_1280.jpg");
  background-size: cover;
  height: 100vh;
`;

const Div = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  font-weight: 700;
  font-size: 100px;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const Keyf = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Name = styled.div`
  opacity: 0;
  animation: ${Keyf} 1s linear;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

const Job = styled.div`
  padding-top: 50px;
  font-size: 5vw;
  opacity: 0;
  animation: ${Keyf} 1s linear;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;

const Location = styled.h1`
  font-size: 4vw;
  padding-top: 50px;
  opacity: 0;
  animation: ${Keyf} 1s linear;
  animation-delay: 3s;
  animation-fill-mode: forwards;
`;

const Icon = styled.span`
  color: #f88ab1;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;
const Span = styled.span`
  padding: 20px;
`;

export default () => {
  return (
    <>
      {" "}
      <Container>
        {" "}
        <Div>
          <Name>Byul Kim</Name>
          <Job>Front-end developer</Job>
          <Location>
            <Icon>
              <i class="fas fa-map-marker-alt"></i>
            </Icon>
            <Span>Vancouver, BC</Span>
          </Location>
        </Div>
      </Container>
    </>
  );
};
