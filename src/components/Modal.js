//import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Modal = ({ toggleOpen }) => {
  // let navigate = useNavigate();
  // const valid = true;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (valid) {
  //     return navigate("/newemployee");
  //   }
  // };

  return (
    <ModalContainer className={toggleOpen ? "show" : "hide"}></ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
`;
