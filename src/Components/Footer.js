import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #6aabd2;
  color: white;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 200;
`;

const Icons = styled.div`
  font-size: 30px;
  padding-bottom: 30px;
`;

const P = styled.div`
  padding: 10px;
  &:nth-child(1) {
    padding-bottom: 30px;
  }
  &:nth-child(2) {
    font-weight: 400;
    font-size: 30px;
  }
  &:nth-child(3) {
    font-size: 20px;
    font-weight: 400;
  }
  &:nth-child(4) {
    padding-bottom: 30px;
  }
`;
export default () => {
  return (
    <>
      <Container>
        <P>Feel free to contact with me!</P>
        <P>Byul Kim</P>
        <P>caxbelle@gmail.com </P>
        <P>Vancouver, BC Canada</P>
        <Icons>
          <i class="fab fa-youtube" style={{ padding: "20px" }}></i>
          <i class="fab fa-instagram" style={{ padding: "20px" }}></i>
          <i class="fab fa-linkedin-in" style={{ padding: "20px" }}></i>
        </Icons>
        &copy; 2021 Byul Kim | All rights reserved
      </Container>
    </>
  );
};
