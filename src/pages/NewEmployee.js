import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { createNewEmployee } from "../slices/employeeSlice";
import { FormEmployee } from "../components/FormEmployee";
import { Modal } from "../components/Modal";

export const NewEmployee = () => {
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

  const [formValidation, setFormValidation] = useState({
    firstnameIsValid: false,
    lastnameIsValid: false,
    birthdateIsValid: false,
    startdateIsValid: false,
    streetIsValid: false,
    cityIsValid: false,
    stateIsValid: false,
    zipcodeIsValid: false,
    departmentIsValid: false,
  });

  const [allFieldsAreValid, setAllFieldsAreValid] = useState(false);

  const validateAllFields = (fields) => {
    let validity;
    for (const [, value] of Object.entries(fields)) {
      if (value === false) {
        validity = false;
        break;
      } else {
        validity = true;
      }
    }
    setAllFieldsAreValid(validity);
  };

  const [toggleOpen, setToggleOpen] = useState(false);

  useEffect(() => {
    validateAllFields(formValidation);
  }, [formValidation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAllFields(formValidation);
    if (allFieldsAreValid) {
      setToggleOpen(true);
      dispatch(createNewEmployee(employee));
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
          formValidation={formValidation}
          setFormValidation={setFormValidation}
          allFieldsAreValid={allFieldsAreValid}
          setAllFieldsAreValid={setAllFieldsAreValid}
        />
      </ContainerNewEmployee>
      <Modal toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />
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
