import styled from "styled-components";
import { Tab } from "./Tab";
import logo from "../assets/HRNet-.png";
import { useState } from "react";

export const NavBar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <>
      <NavMobil onClick={() => setToggleOpen(true)}>☰</NavMobil>
      <Nav className={toggleOpen ? "show" : "hide"}>
        <NavLogo onClick={() => setToggleOpen(false)}>
          <Logo src={logo} alt="HRNet" />
          <span>HRNet</span>
        </NavLogo>
        <TabsContainer>
          <Tab tabIcon="fa-home" tabLink="/">
            Home
          </Tab>
          <Tab tabIcon="fa-user" tabLink="newemployee">
            New employee
          </Tab>
          <Tab tabIcon="fa-group" tabLink="allemployee">
            All employee
          </Tab>
        </TabsContainer>
      </Nav>
    </>
  );
};

const NavMobil = styled.div`
  display: none;
  @media screen and (max-width: 1320px) {
    font-size: 3rem;
    margin: 0.5em;
    display: block;
    position: absolute;
  }
`;

const Nav = styled.nav`
  background-color: #1d3354;
  padding: 0 25px;

  @media screen and (max-width: 1320px) {
    transform: scale(0);
    &.show {
      transform: scale(1);
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 5;
      border-right: 1px solid white;
    }
    &.hide {
      display: none;
    }
  }
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  font-weight: bold;
  color: #1d3354;
  max-width: 100%;

  & span {
    color: white;
    margin-left: 10px;
    font-size: 2rem;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  width: 40px;
  height: auto;
  object-fit: contain;
`;

const TabsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;
