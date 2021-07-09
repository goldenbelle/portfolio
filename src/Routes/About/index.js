import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Api } from "../../Components/Api";
import Axios from "../../Components/Axios";
import Loader from "../../Components/Loader";
import History from "./History";
import Skills from "./Skills";
import Intro from "./Intro";
import Profile from "./Profile";
import Footer from "../../Components/Footer";

import Img1 from "../../Assets/1.png";
import Img2 from "../../Assets/2.png";
import Img3 from "../../Assets/3.png";
import Img4 from "../../Assets/4.png";
import {
  ParallaxProvider,
  ParallaxBanner,
  Parallax,
} from "react-scroll-parallax";

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

const Div = styled.div`
  background-image: linear-gradient(transparent, transparent, white);
  width: 100%;
  height: 100%;
`;

export default () => {
  const { data, loading, error } = Axios(Api.about());
  const containerRef = useRef();
  const [contRef, setContRef] = useState("");

  useEffect(() => {
    setContRef(containerRef.current);
  }, [containerRef]);

  return loading ? (
    <>
      <ParallaxProvider scrollContainer={contRef}>
        <ParallaxBanner
          layers={[
            {
              image: Img3,
              amount: 0.1,
            },
            {
              image: Img3,
              amount: 0.2,
            },

            {
              image: Img2,
              amount: 0.3,
            },
            {
              children: <Intro />,
              amount: 0.5,
            },
            {
              image: Img1,
              amount: -0.4,
            },
            {
              children: <Div>eeee</Div>,
              amount: -0.2,
            },
          ]}
          style={{
            height: "100vh",
            width: "100%",
            fontSize: "50px",
            backgroundColor: "#6aabd2",
          }}></ParallaxBanner>
        <Section>
          <Profile />
          <p>&nbsp;</p>
          <History />
          <p>&nbsp;</p>
          <Skills />
          <p>&nbsp;</p>
        </Section>
      </ParallaxProvider>
      <Footer />
    </>
  ) : (
    <Loader />
  );
};
