import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewEmployee } from "../slices/employeeSlice";
import { FormEmployee } from "../components/FormEmployee";
// import { Modal } from "../components/Modal";

export const NewEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.arr);

  const [employee, setEmployee] = useState({
    id: employees[employees.length - 1].id + 1,
    firstname: "",
    lastname: "",
    birthdate: "",
    startdate: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    department: "",
  });

  console.log(employee);
  const handleSubmit = (e) => {
    const valid = true;
    e.preventDefault();
    dispatch(createNewEmployee(employee));
    if (valid) {
      //setToggleOpen(true);
      return navigate("/allemployee");
    }
  };

  return (
    <>
      <ContainerNewEmployee>
        <h1>New Employee</h1>
        <FormEmployee
          handleSubmit={handleSubmit}
          employee={employee}
          setEmployee={setEmployee}
        />
      </ContainerNewEmployee>
      {/* <Modal toggleOpen={toggleOpen} /> */}
    </>
  );
};

const ContainerNewEmployee = styled.section`
  background-color: #c9d8c5;
  padding: 0 2em;

  & form {
    max-width: 800px;
    margin: auto;
    padding: 2em;
  }

  @media screen and (max-width: 1320px) {
    width: 100vw;
    justify-content: center;
    padding: 0;
    h1 {
      text-align: center;
    }
  }
`;
