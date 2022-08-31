import { Link } from "react-router-dom";
import logo from "../assets/HRNet-.png";
import styled from "styled-components";
import { Tab } from "./Tab";

export const NavBar = () => {
  return (
    <Nav>
      <NavLogoLink to="./">
        <Logo src={logo} alt="HRNet" />
        <span>HRNet</span>
      </NavLogoLink>
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
  );
};

const Nav = styled.nav`
  background-color: #131c38;
  padding: 0 25px;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  display: block;
  max-width: 100%;
`;

const NavLogoLink = styled(StyledLink)`
  display: flex;
  align-items: center;
  margin-top: 40px;

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
