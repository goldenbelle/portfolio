import React from "react";
import styled from "styled-components";
import { Api } from "../../Components/Api";
import Axios from "../../Components/Axios";
import Loader from "../../Components/Loader";
import makeCarousel from "react-reveal/makeCarousel";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const Title = styled.div`
  font-size: 10vw;
  font-weight: 600;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding-bottom: 50px;
`;

const History = styled.div`
  width: 800px;
  display: block;
  box-sizing: border-box;
`;

const Line = styled.div`
  position: absolute;
  right: 50%;
  width: 5px;
  height: 300px;
  background-color: white;
  z-index: 100;
`;

const Entry = withReveal(
  styled.div`
    width: 50%;
    position: relative;
    padding: 20px;
    text-align: right;
    background-color: pink;
    &:before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: #1d1d1d;
      border-radius: 100%;
      top: 50%;
      right: -2px;
      z-index: 1000;
    }
    &:nth-child(2n) {
      margin-left: 50%;
      text-align: left;
      &:before {
        left: -10px;
      }
    }
    &:hover {
      &:before {
        background-color: red;
      }
    }
  `,
  <Fade bottom />
);

const PPulse = withReveal(
  styled.div`
    background-color: blue;
  `,
  <Pulse />
);
export default () => {
  const { data, loading, error } = Axios(Api.resume());

  return loading ? (
    <>
      <Fade bottom>
        <PPulse>
          <Title>History of my life</Title>
        </PPulse>
      </Fade>
      <History>
        <Line></Line>
        <Entry>
          2014-2018
          <p>Bacheolor's Degree in Business Administration</p>
        </Entry>

        <Entry>
          2016-2019
          <p>Graphic Designer</p>
          <p>Sales Associate</p>
          <p>Human Bio Health Co.</p>
        </Entry>

        <Entry>
          2019
          <p>Video Editor</p>
          <p>Personal Youtube Channel</p>
        </Entry>

        <Entry>
          2018-Current
          <p>Graphic Designer</p>
          <p>Marketing Coordinator</p>
          <p>VCEC Education Consulting Ltd.</p>
        </Entry>
      </History>
    </>
  ) : (
    <Loader />
  );
};
