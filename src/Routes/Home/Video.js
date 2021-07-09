import React from "react";
import styled, { keyframes } from "styled-components";

// ㅎㅏㄴ복입은 사진, 하늘을 움직이게, 나머지는 구름위에 있는 느낌으로, 구름위로 올라가는 느낌 고고

const Slide = keyframes`
  0% {margin-top:-400px;}
  5% {margin-top:-300px;}

  23.75% {margin-top:-300px;}
  30% {margin-top:-200px;}

  47.5% {margin-top:-200px;}
  55% {margin-top:-100px;}

  75% {margin-top:-100px;}
  80% {margin-top:0px;}

  95% {margin-top:0px;}
  100% {margin-top:50px;}
`;
const Container = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2013/02/15/02/22/skydivers-81778_1280.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
`;
const Wrapper = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: skyblue;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slider = styled.div`
  height: 50px;
  padding-left: 15px;
  overflow: hidden;
`;

const Text = styled.div`
  height: 50px;
  margin-bottom: 50px;
  padding: 5px 15px;
  text-align: center;
  box-sizing: border-box;
  &:nth-child(1) {
    animation: ${Slide} 10s linear infinite;
    margin-top: -100px;
  }
`;

export default () => {
  return (
    <>
      <Container>
        <Wrapper>
          I am
          <Slider>
            <Text>Belle</Text>
            <Text>Developer</Text>
            <Text>Designer</Text>
            <Text>Marketer</Text>
          </Slider>
        </Wrapper>
      </Container>
    </>
  );
};
