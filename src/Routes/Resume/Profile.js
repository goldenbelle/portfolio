import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 20px;
  height: 50%;
  padding: 30px;
`;

const Title = styled.div`
  font-size: 10vw;
  font-weight: 600;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export default () => {
  return (
    <>
      <Fade>
        <Title>WHO AM I?</Title>
      </Fade>
      <Contents>
        <Fade bottom cascade>
          <Photo>Photo</Photo>
          <Profile>
            <p>
              Hello, My name is Belle! I am living in Vancouver. I have degree
              in Business. I am self-motivated and self learner. I have learn
              design and programming by myself. I am willing to learn new thing!{" "}
            </p>
          </Profile>
        </Fade>
      </Contents>
    </>
  );
};
