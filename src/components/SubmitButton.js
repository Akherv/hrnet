import styled from "styled-components";

export const SubmitButton = () => {
  return <ButtonContainer>Save</ButtonContainer>;
};
export default SubmitButton;

const ButtonContainer = styled.button`
  display: block;
  width: 300px;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 2rem auto;
  border: none;
  border-radius: 5px;
  background-color: #131c38;
  color: #fff;
`;
