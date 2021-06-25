import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

const Contents = styled.div`
  padding: 20px;
  font-size: 16px;
  font-weight: 200;
  line-height: 30px;
`;

const Title = styled.div`
  font-size: 10vw;
  font-weight: 600;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 50px;
`;

const Column = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;
const List = styled.li`
  text-align: center;
`;

export default () => {
  return (
    <>
      <Zoom>
        <Title>Skills</Title>
      </Zoom>
      <Zoom>
        <Contents>
          <Column>
            <List>
              <span class="fa fa-code"></span>
              <h3>Music</h3>
              <p>Music is aegae gaeg aegaegaega egag aegaegae aegga a eag</p>
            </List>
            <List>
              <span class="fa fa-music"></span>
              <h3>Music</h3>
              <p>
                Music is an art form whose medium is sound and silence.ne work
                of music, especially when involving singing.{" "}
              </p>
            </List>
            <List>
              <span class="fa fa-users"></span>
              <h3>Music</h3>
              <p>
                Music is an art form whose medium is sound and silence.
                Generally, a song is considered the smallest k of music,
                especially when involving singing.{" "}
              </p>
            </List>
          </Column>
        </Contents>
      </Zoom>
    </>
  );
};
