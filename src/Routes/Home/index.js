import React from "react";
import styled, { keyframes } from "styled-components";
import Footer from "../../Components/Footer";
import Fade from "react-reveal/Fade";
import Video from "./Video";
import Fixed from "./Fixed";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  FadeOut,
  Sticky,
  StickyIn,
  StickyOut,
  ZoomOut,
} from "react-scroll-motion";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  &:nth-child(4) {
    height: 100%;
  }
`;

const Color = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6aabd2;
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const Span = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
`;

const Btn = styled.div`
  background-color: lightgray;
  width: 100px;
  height: 29px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: none;
  font-weight: 100;
  margin-top: 20px;
  z-index: 1;
`;

const Img = styled.div`
  background-image: url(${(props) => props.imgsrc});
  height: 500px;
  width: 500px;
  position: absolute;
`;

export default () => {
  return (
    <>
      <ScrollContainer>
        <Fixed />

        <Section>
          <Video />
        </Section>

        <Section></Section>

        <Section>
          <ScrollPage page={1}>
            <ScrollPage page={2}>
              <Animator animation={batch(Sticky(), FadeIn())}>
                <Color style={{ backgroundColor: "white" }}>
                  <Span></Span>
                </Color>
              </Animator>
            </ScrollPage>
            <Animator animation={batch(StickyOut(), ZoomOut(), FadeOut(0, 1))}>
              <Title style={{ fontSize: "40px" }}>Recent Works</Title>
            </Animator>
          </ScrollPage>

          <ScrollPage page={3}>
            <Animator animation={batch(Sticky(), FadeIn())}>
              <Color style={{ backgroundColor: "#D9E4EC" }}>
                <Span style={{ fontSize: "40px" }}>
                  VCEC Brand Identity <Btn>Learn More</Btn>
                </Span>
                <Img imgsrc="https://cdn.pixabay.com/photo/2021/04/25/23/17/rome-6207755_1280.jpg"></Img>
              </Color>
            </Animator>
          </ScrollPage>

          <ScrollPage page={4}>
            <Animator animation={batch(Sticky(), FadeIn())}>
              <Color style={{ backgroundColor: "#B7CFDC" }}>
                <Span style={{ fontSize: "40px" }}>
                  Instagram Contents <Btn>Learn More</Btn>
                </Span>
                <Img imgsrc="https://cdn.pixabay.com/photo/2021/04/26/17/37/germany-6209610_1280.jpg"></Img>
              </Color>
            </Animator>
          </ScrollPage>

          <ScrollPage page={5}>
            <Animator animation={batch(StickyIn(), FadeIn())}>
              <Color style={{ backgroundColor: "#6AABD2" }}>
                <Span style={{ fontSize: "40px" }}>
                  Movie Website<Btn>Learn More</Btn>
                </Span>
                <Img imgsrc="https://cdn.pixabay.com/photo/2021/05/27/20/53/field-6289253_1280.jpg"></Img>
              </Color>
            </Animator>
          </ScrollPage>
        </Section>
      </ScrollContainer>

      <Footer />
    </>
  );
};
