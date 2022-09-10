import styled from "styled-components";

export function Error() {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'éxiste pas.</p>
    </ErrorContainer>
  );
}
const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c9d8c5;
  @media screen and (max-width: 1320px) {
    width: 100vw;
  }
`;
