import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.div`
  color: white;
  padding-left: 20px;
  font-weight: 600;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  padding: 20px 20px 0px 0px;
  z-index: 1;
  i:nth-child(1) {
    display: ${(props) => (props.className ? "block" : "none")};
  }
  i:nth-child(2) {
    display: ${(props) => (props.className ? "none" : "block")};
  }
  i:hover {
    cursor: pointer;
  }
`;

const Menus = styled.div`
  display: ${(props) => (props.className ? "none" : "flex")};
  position: absolute;
  right: 0px;
  background-color: rgba(255, 255, 255, 0.8);
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  height: 100vh;
  width: 50%;
`;

const Dropdown = styled.div`
  display: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: ${(props) => (props.current ? "#f88ab1" : "black")};
  padding: 10px 0px 10px 15px;
  z-index: 1;
`;

const Item = styled.div`
  display: ${(props) => (props.className ? "none" : "block")};

  color: ${(props) => (props.current ? "#f88ab1" : "black")};
  transition: background-color 0.5s ease-in-out;
  &:hover {
    color: #f88ab1;
    ${Dropdown} {
      display: block;
      &:hover {
        color: #f88ab1;
      }
    }
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export default withRouter(({ location: { pathname } }) => {
  const menus = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio", dropdown: ["Web", "Graphic"] },
    { name: "Contact", path: "/contact" },
  ];

  const [btn, setBtn] = useState(true);

  const handleToggle = (e) => {
    if (btn === true) {
      setBtn(false);
    } else if (btn === false) {
      setBtn(true);
    }
  };

  const setTrue = (e) => {
    setBtn(true);
  };

  return (
    <Header>
      <List className={btn}>
        <Logo>
          <SLink to="/">Byul</SLink>
        </Logo>

        <Btn onClick={handleToggle} className={btn}>
          <i class="fas fa-bars fa-2x"></i>
          <i class="fas fa-times fa-2x"></i>
        </Btn>

        <Menus className={btn}>
          {menus.map((menu, index) => (
            <Item key={index} current={pathname === menu.path} className={btn}>
              <SLink to={menu.path} onClick={setTrue}>
                {menu.name}
              </SLink>
              {menu.dropdown
                ? menu.dropdown.map((n) => (
                    <Dropdown
                      current={pathname === `/portfolio/${n}`}
                      onClick={setTrue}>
                      <Link to={`/portfolio/${n}`}>{n}</Link>
                    </Dropdown>
                  ))
                : null}
            </Item>
          ))}
        </Menus>
      </List>
    </Header>
  );
});
