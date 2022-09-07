import styled from "styled-components";

export const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome back !</h1>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  width: 100vw;
  background-color: #c9d8c5;
  display: flex;
  justify-content: flex-start;

  & h1 {
    margin-left: 2em;
  }

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;
