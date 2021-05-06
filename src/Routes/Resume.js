import React from "react";
import styled from "styled-components";
import { Api } from "../Components/Api";
import Axios from "../Components/Axios";

const Container = styled.div`
  background-color: lightgray;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 10px;
  padding-top: 50px;
`;

const Column = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  font-size: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const Property = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  padding: 10px;
  color: gold;
`;

const Value = styled.div`
  grid-column: span 3;
  padding: 10px;
  line-height: 30px;
`;

const Ul = styled.ul`
  padding-bottom: 20px;
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
        <Div>
          <Column>
            <Property>Work</Property>
            <Value>
              {data.data.work.map((work, index) => (
                <Ul key={index}>
                  {work.position}
                  <Li>{work.company}</Li>
                  <Li>{work.period}</Li>
                  <Li>Vancouver, BC</Li>
                  {work.detail.map((d) => (
                    <Li>- {d}</Li>
                  ))}
                </Ul>
              ))}
            </Value>
          </Column>

          <Column>
            <Property>Skills</Property>
            <Value>
              <Icon>
                {data.data.skill.map((s, index) => (
                  <div>{s.skill}</div>
                ))}
              </Icon>
            </Value>
          </Column>

          <Column>
            <Property>Education</Property>
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
    "HAHAHAHAH"
  );
};
