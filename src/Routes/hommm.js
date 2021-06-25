import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Zoom from "react-reveal/Zoom";
import Video from "./Video";
import Fixed from "./Fixed";
import Works from "./Works";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Section = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  position: absolute;
  &:nth-child(1) {
    position: fixed;
  }
  &:nth-child(2) {
  }
  &:nth-child(3) {
    margin-top: 200vh;
  }
  &:nth-child(4) {
    margin-top: 300vh;
    height: 30%;
  }
`;

export default () => {
  return (
    <>
      <Container>
        <Section>
          <Fixed />
          <Background />
        </Section>

        <Section>
          <Video />
        </Section>

        <Section>
          <Works />
        </Section>

        <Section>
          <Footer />
        </Section>
        <Footer />
      </Container>
    </>
  );
};
