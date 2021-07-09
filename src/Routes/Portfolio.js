import React, { useState, useEffect } from "react";
import Axios from "../Components/Axios";
import { Api } from "../Components/Api";
import Loader from "../Components/Loader";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Sticky,
  MoveOut,
  FadeOut,
} from "react-scroll-motion";

const Div = styled.div`
  background-color: #6aabd2;
  color: white;
`;

const Title = styled.div`
  font-size: 7vw;
  font-weight: 600;
  padding-bottom: 20px;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  opacity: 0.7;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
`;

const View = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: none;
`;

const Img = styled(Link)`
  width: 70vw;
  max-width: 800px;
  height: 500px;
  margin: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  font-size: 30px;
  position: relative;
  &:hover {
    box-shadow: none;
    ${View} {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 300;
      font-size: 20px;
      color: skyblue;
      box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
    }
  }
`;

const Detail = styled.div`
  text-align: center;
`;

const Subtitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  padding: 5px;
`;

const Duty = styled.div`
  font-weight: 200;
`;

export default () => {
  const { data, loading, error } = Axios(Api.portfolio());
  return loading ? (
    <>
      <Div>
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator
              animation={batch(Sticky(), MoveOut(1000, 0), FadeOut(1, 0))}>
              <Title>Portfolio</Title>
            </Animator>
            <Animator
              animation={batch(Sticky(), MoveOut(-1000, 0), FadeOut(1, 0))}>
              <Title>Portfolio</Title>
            </Animator>
          </ScrollPage>
        </ScrollContainer>

        <Container>
          {data.data.design.map((design, index) => (
            <>
              <Item key={index}>
                <Img to={`portfolio/${design.id}`} bgUrl={design.thumbnail_url}>
                  <View>view</View>
                </Img>
                <Detail>
                  <Subtitle>{design.title}</Subtitle>
                  <Duty>
                    {design.client} | {design.type}
                  </Duty>
                </Detail>
              </Item>
            </>
          ))}
          {data.data.web.map((web, index) => (
            <>
              <Item key={index}>
                <Img to={`portfolio/${web.id}`} bgUrl={web.thumbnail_url}>
                  <View>view</View>
                </Img>
                <Detail>
                  <Subtitle>{web.title}</Subtitle>
                  <Duty>
                    {web.client} | {web.type}
                  </Duty>
                </Detail>
              </Item>
            </>
          ))}
        </Container>
      </Div>
      <Footer />
    </>
  ) : (
    <Loader />
  );
};
