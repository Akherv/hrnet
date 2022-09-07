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
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c9d8c5;
`;
