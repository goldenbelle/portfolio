import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  width: 80px;
  height: 50px;
  text-align: center;
  background-color: ${(props) => (props.current ? "grey" : "transparent")};
  transition: background-color 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>{" "}
      </Item>
      <Item current={pathname === "/resume"}>
        <SLink to="/resume">Resume</SLink>{" "}
      </Item>
      <Item current={pathname === "/projects"}>
        <SLink to="/projects">Projects</SLink>{" "}
      </Item>
      <Item current={pathname === "/contact"}>
        <SLink to="/contact">Contact</SLink>{" "}
      </Item>
    </List>
  </Header>
));
