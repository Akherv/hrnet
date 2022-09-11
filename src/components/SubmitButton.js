import styled from "styled-components";

export const SubmitButton = ({ allIsValid }) => {
  //console.log(allIsValid);
  return <ButtonContainer active={allIsValid}>Save</ButtonContainer>;
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
  cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};
  background-color: ${(props) => (props.active ? "#1d3354" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "lightgrey")};
`;
