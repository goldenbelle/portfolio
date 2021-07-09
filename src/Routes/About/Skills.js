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

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #6aabd2;
  padding-bottom: 20px;
  margin: 50px;
`;

const Column = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  font-size: 16px;
  line-height: 50px;
`;

const List = styled.li`
  text-align: center;
`;

const Icon = styled.div`
  color: lightgray;
  font-size: 30px;
`;
const Skill = styled.div`
  color: gray;
  font-weight: 500;
  font-size: 30px;
`;
const Detail = styled.div`
  line-height: 30px;
`;

export default () => {
  return (
    <>
      <Div>
        <Fade bottom>
          <Title>My Skills</Title>
        </Fade>

        <Column>
          <Fade bottom>
            <List>
              <Icon>
                <i class="far fa-lightbulb"></i>
              </Icon>
              <Skill>Marketing</Skill>
              <Detail>
                aeae Mu aeg a eaga eagae ae age aae eag ae ega egaeag aega eag
                aega ea eagaegaeg ae aega ega ea eagaegae aeg aeg aegaeg aea
                egeag aegae gaeg aegaegaega egag aegaegae aegga a eag
              </Detail>
            </List>
          </Fade>
          <List>
            <Icon>
              <i class="far fa-object-ungroup"></i>
            </Icon>
            <Skill>Marketing</Skill>
            <Detail>
              Music is aegae gaeg aegaegaega egag aegaegae aegga a eag
            </Detail>
          </List>
          <List>
            <Icon>
              <i class="fas fa-code"></i>
            </Icon>
            <Skill>Marketing</Skill>
            <Detail>
              Music is aegae gaeg aegaegaega egag aegaegae aegga a eag
            </Detail>
          </List>
        </Column>
      </Div>
    </>
  );
};

// 맨 마지막에 아이콘 슬라이드쇼 하기
