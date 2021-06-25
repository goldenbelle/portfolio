import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: pink;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const Close = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 100;
  padding: 50px 0px 100px 0px;
  text-align: right;
`;

const Contents = styled.div`
  display: grid;
  max-width: 800px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  grid-column: span 2;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div`
  width: 400px;
  height: 400px;
  background-color: grey;
`;

const Detail = styled.h1`
  margin: 50px;
  padding: 10px;
  background-color: red;
`;

export default () => {
  return (
    <Container>
      <Close to="/portfolio/web">
        <i class="fas fa-times"></i>
      </Close>
      <Contents>
        <Box>
          <Link to="2">$$ </Link>
          <Img>hhh</Img>
          <Link to="3">$$ </Link>
        </Box>
        <Detail>1234</Detail>
      </Contents>
    </Container>
  );
};
