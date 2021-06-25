import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../Components/Background";

const Div = styled.div`
  height: 100vh;
`;

const Title = styled.h1`
  padding-top: 90px;
  height: 100px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  position: absolute;
  margin: 0;
  display: grid;
  justify-content: center;
  width: ${(props) => props.sizeY}px;
  height: ${(props) => props.sizeX}px;
  overflow: auto;
  scroll-snap-type: both mandatory;
  transform: rotate(-90deg) translateY(-${(props) => props.sizeY}px);
  transform-origin: right top;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  width: ${(props) => props.sizeY}px;
  height: ${(props) => props.sizeY}px;
  margin: 10px;
  padding: 20px;
  scroll-snap-align: center;
`;

const Img = styled(Link)`
  width: 100%;
  height: 60%;
  margin: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  background-color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Detail = styled.div`
  background-color: pink;
`;

export default () => {
  const useScreen = () => {
    const initialX = window.innerWidth;
    const initialY = window.innerHeight;
    const [item, setScreen] = useState({ x: initialX, y: initialY });

    const getSize = (event) => {
      const innerHeight = event.target.innerHeight;
      const innerWidth = event.target.innerWidth;
      setScreen({ x: innerWidth, y: innerHeight });
    };

    useEffect(() => {
      window.addEventListener("resize", getSize);
      return () => {
        window.removeEventListener("resize", getSize);
      };
    }, []);
    return { ...item, getSize };
  };

  let { x, y, getSize } = useScreen();

  return (
    <>
      <Div>
        <Background />
        <Title>WEB</Title>
        <Container onResize={getSize} sizeX={x} sizeY={y - 150}>
          <Item sizeX={x} sizeY={y - 150}></Item>
          <Item sizeX={x} sizeY={y - 150}>
            <Img to="1">
              haha{x} {y}
            </Img>
            <Detail>Title</Detail>
          </Item>
          <Item sizeX={x} sizeY={y - 150}>
            <Img to="2"></Img>
            <Detail>Title</Detail>
          </Item>
          <Item sizeX={x} sizeY={y - 150}>
            <Img to="1"></Img>
            <Detail>Title</Detail>
          </Item>
          <Item sizeX={x} sizeY={y - 150}>
            <Img></Img>
            <Detail>Title</Detail>
          </Item>
          <Item sizeX={x} sizeY={y - 150}></Item>
        </Container>
      </Div>
    </>
  );
};
