import React from "react";
import styled from "styled-components";
import { Api } from "../../Components/Api";
import Axios from "../../Components/Axios";
import Loader from "../../Components/Loader";
import Fade from "react-reveal/Fade";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 20px;
  margin: 20px;
  font-size: 18px;
  color: gray;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #6aabd2;
  padding-bottom: 20px;
  margin: 50px;
`;

const History = styled.div`
  width: 800px;
  height: 100%;
  display: block;
  box-sizing: border-box;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  right: 50%;
  width: 3px;
  height: 100%;
  background-color: gray;
  z-index: 100;
`;

const Entry = styled.div`
  width: 50%;
  position: relative;
  padding: 20px;
  text-align: right;
  line-height: 20px;
  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #b7cfdc;
    border-radius: 100%;
    top: 50%;
    right: -2px;
    z-index: 1000;
    border: 3px solid white;
  }
  &:nth-child(2n-1) {
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
`;

const Year = styled.div`
  color: #b7cfdc;
  font-size: 30px;
  padding: 15px;
`;

const Position = styled.div`
  padding-bottom: 10px;
  font-weight: 500;
`;

const Company = styled.div`
  color: lightgray;
`;

export default () => {
  const { data, loading, error } = Axios(Api.about());

  return loading ? (
    <>
      <Div>
        <Fade bottom>
          <Title>History of my life</Title>
        </Fade>
        <History>
          <Line></Line>

          <Entry>
            <Fade bottom>
              <Year>1234</Year>
              <Position>Graphic Designer</Position>
              <Company>ABC Education</Company>
            </Fade>
          </Entry>

          <Entry>
            <Fade bottom>
              <Year>1234</Year>
              <Position>Graphic Designer</Position>
              <Company>ABC Education</Company>
            </Fade>
          </Entry>

          <Entry>
            <Fade bottom>
              <Year>1234</Year>
              <Position>Graphic Designer</Position>
              <Company>ABC Education</Company>
            </Fade>
          </Entry>

          <Entry>
            <Fade bottom>
              <Year>1234</Year>
              <Position>Graphic Designer</Position>
              <Company>ABC Education</Company>
            </Fade>
          </Entry>
        </History>
      </Div>
    </>
  ) : (
    <Loader />
  );
};
