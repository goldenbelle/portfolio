import React from "react";
import styled from "styled-components";
import { Api } from "../Components/Api";
import Axios from "../Components/Axios";
import Loader from "../Components/Loader";
import Background from "../Components/Background";

const Container = styled.div``;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 10px;
  padding-top: 50px;
  max-width: 800px;
  margin: auto;
`;

const Intro = styled.div`
  padding: 10px;
  font-size: 20px;
`;

const Column = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  font-size: 15px;
  line-height: 25px;
`;

const Title = styled.div`
  grid-column: 1/-1;
  padding: 10px;
  padding-top: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  color: #f88379;
  font-weight: 600;
  font-size: 25px;
  text-transform: uppercase;
`;

const Property = styled.div`
  padding: 10px;
`;

const List = styled.div`
  font-style: italic;
  color: lightgray;
`;

const Value = styled.div`
  grid-column: 2/-1;
  padding: 10px;
`;

const Ul = styled.ul`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;

const Li = styled.li`
  font-size: 15px;
  font-weight: 300;
`;

const Icon = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default () => {
  const { data, loading, error } = Axios(Api.resume());

  return loading ? (
    <>
      <Container>
        <Background />
        <Div>
          <Intro>Hi, I am Belle!</Intro>
          <Column>
            <Title>🙋‍♀️ About me</Title>
            <Property>Contact</Property>
            <Value>Github</Value>
          </Column>

          <Column>
            <Title>🖥 Experiences</Title>
            {data.data.work.map((work, index) => (
              <>
                <Property>
                  {" "}
                  <List>
                    <i class="fas fa-calendar-alt"></i>
                    {work.period}
                  </List>{" "}
                  <List>
                    <i class="fas fa-map-marker-alt"></i>Vancouver, BC
                  </List>{" "}
                </Property>
                <Value>
                  <Ul>
                    {work.position}
                    <Li>{work.company}</Li>
                    {work.detail.map((d) => (
                      <Li>- {d}</Li>
                    ))}
                  </Ul>
                </Value>{" "}
              </>
            ))}
          </Column>

          <Column>
            <Title>🔮 Skills</Title>
            <Property>2021.01.01 ~ 2021.01.01</Property>
            <Value>
              <Icon>
                {data.data.skill.map((s, index) => (
                  <div>{s.skill}</div>
                ))}
              </Icon>
            </Value>
          </Column>

          <Column>
            <Title>🎓 Education</Title>
            <Property>Web</Property>
            <Value>
              {data.data.education.map((edu, index) => (
                <Ul key={index}>
                  {edu.school}
                  <Li>{edu.degree}</Li>
                  <Li>{edu.period}</Li>
                  <Li>{edu.location}</Li>
                </Ul>
              ))}
            </Value>
          </Column>
        </Div>
      </Container>
    </>
  ) : (
    <Loader />
  );
};
