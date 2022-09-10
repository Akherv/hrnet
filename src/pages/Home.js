import styled from "styled-components";
import { Login } from "../components/Login";

export const Home = () => {
  return (
    <HomeContainer>
      <Login />
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  background-color: #c9d8c5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1320px) {
    width: 100vw;
    justify-content: center;
  }
`;
