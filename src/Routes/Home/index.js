import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Fade from "react-reveal/Fade";
import Video from "./Video";
import Fixed from "./Fixed";
import Works from "./Works";
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
  Zoom,
  ZoomOut,
} from "react-scroll-motion";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  &:nth-child(4) {
    background-color: #7be3d7;
    height: 100%;
  }
`;

const Back = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #7be3d7;
`;

const Color = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Title = styled.div`
  display: grid;
  grid-template-rows: 50vh 50vh;
  ${Back} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    background-image: linear-gradient(
      180deg,
      transparent,
      #7be3d7,
      #7be3d7,
      #7be3d7
    );
    font-size: 7vw;
    color: white;
    font-weight: 600;
    padding-bottom: 5%;
  }
`;

const Blend = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bfont = styled.div`
  font-size: 8vw;
  line-height: 8vw;
  margin: 0;
  font-weight: 900;
  color: white;
  position: relative;
  z-index: 100;
  mix-blend-mode: darken;
`;

const FontBack = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #7be3d7;
`;
const Bimg = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2018/07/04/11/58/xiamen-3515964_1280.jpg");
  background-size: cover;
  background-position: center;
`;

export default () => {
  return (
    <>
      <Background />
      <ScrollContainer>
        <Fixed />

        <Section>
          <Video />
        </Section>

        <Section>
          <Title>
            <div></div>

            <Back>
              <Fade top>Recent Works</Fade>
            </Back>
          </Title>
        </Section>

        <Section>
          <ScrollPage page={2}>
            <Animator animation={batch(StickyOut())}>
              <Color style={{ backgroundColor: "" }}>
                <Span style={{ fontSize: "40px" }}>
                  VCEC Brand Identity <Btn>Learn More</Btn>
                </Span>
                <Img imgsrc="https://cdn.pixabay.com/photo/2021/04/25/23/17/rome-6207755_1280.jpg"></Img>
              </Color>
            </Animator>
          </ScrollPage>

          <ScrollPage page={3}>
            <Animator animation={batch(Sticky(), FadeIn())}>
              <Color style={{ backgroundColor: "blue" }}>
                <Span style={{ fontSize: "40px" }}>
                  Instagram Contents <Btn>Learn More</Btn>
                </Span>
                <Img imgsrc="https://cdn.pixabay.com/photo/2021/04/26/17/37/germany-6209610_1280.jpg"></Img>
              </Color>
            </Animator>
          </ScrollPage>

          <ScrollPage page={4}>
            <Animator animation={batch(StickyIn(), FadeIn())}>
              <Color style={{ backgroundColor: "pink" }}>
                <Span style={{ fontSize: "40px" }}>
                  Movie Website<Btn>Learn More</Btn>
                </Span>
                <Img imgsrc="https://cdn.pixabay.com/photo/2021/05/27/20/53/field-6289253_1280.jpg"></Img>
              </Color>
            </Animator>
          </ScrollPage>

          <ScrollPage page={5}>
            <Blend>
              <ScrollPage page={6}>
                <Animator animation={batch(StickyIn())}>
                  <Bimg></Bimg>
                </Animator>
              </ScrollPage>

              <Animator animation={batch(StickyOut(), FadeOut(1, 0))}>
                <FontBack></FontBack>
              </Animator>
              <Animator
                animation={batch(StickyOut(), ZoomOut(), FadeOut(1, 0))}>
                <Bfont style={{ fontSize: "40px" }}>BYUL KIM</Bfont>
              </Animator>
            </Blend>
          </ScrollPage>
        </Section>

        <Section>
          <Bimg></Bimg>
        </Section>
      </ScrollContainer>

      <Footer />
    </>
  );
};
