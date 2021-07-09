import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  padding: 20px;
  font-size: 18px;
  color: gray;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 20px;
  height: 50%;
  padding: 30px;
  line-height: 30px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #6aabd2;
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
      <Div>
        <Contents>
          <Fade bottom cascade>
            <Photo>Photo</Photo>
            <Profile>
              <p>
                Hello, My name is Belle! I am living in Vancouver. I have degree
                in Business. I am self-motivated and self learner. I have learn
                design and programming by myself. I am willing to learn new
                thing!{" "}
              </p>
            </Profile>
          </Fade>
        </Contents>
      </Div>
    </>
  );
};
