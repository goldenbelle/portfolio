import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Axios from "../Components/Axios";
import { Api } from "../Components/Api";
import Loader from "../Components/Loader";

const Div = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #6aabd2;
  margin: 70px 0px 30px 0px;
`;

const Img = styled.div`
  width: 90vw;
  max-width: 1000px;
  height: 500px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
`;

const Contents = styled.div`
  width: 90vw;
  max-width: 1000px;
`;

const Overview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 50px 0px 50px 0px;
  padding: 5px;
`;

const Column = styled.div`
  &:nth-child(4) {
    grid-column: 1/-1;
  }
`;

const Top = styled.div`
  color: #6aabd2;
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 5px;
`;

const Bottom = styled.div`
  color: gray;
  font-weight: 300;
  font-size: 18px;
`;

const Detail = styled.h1``;

const Btn = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #6aabd2;
  margin: 50px 0px 50px 0px;
`;

export default withRouter(({ location: { pathname } }) => {
  const { data, loading, error } = Axios(Api.portfolio());
  const id = pathname.split("/")[2];

  return loading ? (
    <Div>
      {console.log(data.data.design[id].title)}
      <Title>{data.data.design[id].title}</Title>
      <Img bgUrl={data.data.design[id].thumbnail_url}></Img>

      <Contents>
        <Overview>
          <Column>
            <Top>Type</Top>
            <Bottom>{data.data.design[id].type}</Bottom>
          </Column>
          <Column>
            <Top>Client</Top>
            <Bottom>{data.data.design[id].client}</Bottom>
          </Column>
          <Column>
            <Top>Tools</Top>
            <Bottom>{data.data.design[id].tool}</Bottom>
          </Column>
          <Column>
            <Top>Detail</Top>
            <Bottom>{data.data.design[id].detail}</Bottom>
          </Column>
        </Overview>
        <Detail>
          {data.data.design[id].imgs_url.map((img) => (
            <>
              <Img bgUrl={img}></Img>
            </>
          ))}
        </Detail>
        <Btn>
          <Link to="2"> -Prev </Link>
          <Link to="/portfolio"> Home </Link>
          <Link to="3"> Next- </Link>
        </Btn>
      </Contents>
    </Div>
  ) : (
    <Loader />
  );
});
