import React from "react";
import styled from "styled-components";
import { Api } from "../../Components/Api";
import Axios from "../../Components/Axios";
import Loader from "../../Components/Loader";
import Background from "../../Components/Background";
import History from "./History";
import Skills from "./Skills";
import Intro from "./Intro";
import Profile from "./Profile";
import Quote from "./Quote";

const Div = styled.div`
  height: 100%;
  width: 100%;
`;

const Section = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export default () => {
  const { data, loading, error } = Axios(Api.resume());

  return loading ? (
    <>
      <Div>
        <Background />
        <Section>
          <Intro />
        </Section>

        <Section>
          <Profile />
        </Section>

        <Section>
          <History />
        </Section>

        <Section>
          <Skills />
        </Section>

        <Section>
          <Quote />
        </Section>
      </Div>
    </>
  ) : (
    <Loader />
  );
};
