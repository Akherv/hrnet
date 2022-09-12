import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Modal = ({ toggleOpen, setToggleOpen }) => {
  let navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/allemployee");
    setToggleOpen(false);
  };

  return (
    <ModalContainer
      className={toggleOpen ? "showModal" : "hideModal"}
      style={{ display: toggleOpen ? "block" : "none" }}
    >
      <ModalContent>
        A new Employee has been saved on the table
        <button onClick={handleNavigate}>OK</button>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  &.showModal {
    display: block !important;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ModalContent = styled.div`
  width: 50%;
  height: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & button {
    display: block;
    width: 300px;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 2rem auto;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #1d3354;
    color: #fff;
  }
`;
