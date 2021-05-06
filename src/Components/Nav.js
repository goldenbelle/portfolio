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
  font-weight: ${(props) => (props.current ? "700" : "")};
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  color: ${(props) => (props.current ? "#F7DC6F" : "white")};
  transition: background-color 0.5s ease-in-out;
  &:hover {
    color: #f7dc6f;
  }
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
