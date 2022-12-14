import { useState } from "react";
import styled from "styled-components";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/fr";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import SubmitButton from "./SubmitButton";

export const FormEmployee = ({
  handleSubmit,
  setEmployee,
  employee,
  formValidation,
  setFormValidation,
  allFieldsAreValid,
  setAllFieldsAreValid,
}) => {
  const [errors, setErrors] = useState({});

  const validateField = (e, type) => {
    const field = type ? type : e.target.name;
    const value = type ? e : e.target.value;
    let res = {};
    switch (field) {
      case "firstname":
        res.test = value.length >= 2;
        res.error = "Please enter at least 2 characters";
        break;
      case "lastname":
        res.test = value.length >= 2;
        res.error = "Please enter at least 2 characters";
        break;
      case "birthdate":
        res.test = value.length > 0;
        res.error = "Please pick a birth date";
        break;
      case "startdate":
        res.test = value.length > 0;
        res.error = "Please pick a start date";
        break;
      case "street":
        res.test = value.length > 0;
        res.error = "Please enter a street";
        break;
      case "city":
        res.test = value.length > 0;
        res.error = "Please enter a city";
        break;
      case "state":
        res.test = value.length > 0;
        res.error = "Please enter a state";
        break;
      case "zipcode":
        const regex = /^[0-9]*$/;
        res.test = value.length >= 5 && value.match(regex);
        res.error = "Please enter 5 numbers";
        break;
      case "department":
        res.test = value.length > 0;
        res.error = "Please choose an option";
        break;
      default:
        break;
    }
    return res;
  };

  const handleChange = (e, type) => {
    const isValid = validateField(e, type);
    if (!isValid.test) {
      setErrors({
        ...errors,
        [type ? type : e.target.name]: isValid.error,
      });
      setFormValidation({
        ...formValidation,
        [type ? `${type}IsValid` : `${e.target.name}IsValid`]: false,
      });
      setAllFieldsAreValid(false);
    } else {
      setErrors({ ...errors, [type ? type : e.target.name]: "" });
      setFormValidation({
        ...formValidation,
        [type ? `${type}IsValid` : `${e.target.name}IsValid`]: true,
      });
    }
    setEmployee({
      ...employee,
      [type ? type : e.target.name]: type ? e : e.target.value,
    });
  };

  const modifiedValueBirthdate = moment(
    moment(employee.birthdate, "DD/MM/YYYY"),
    "MM-DD-YYYY"
  );
  const modifiedValueStartDate = moment(
    moment(employee.startdate, "DD/MM/YYYY"),
    "MM-DD-YYYY"
  );

  return (
    <form onSubmit={handleSubmit}>
      <FieldsetContainer>
        <legend>Identity</legend>
        <InputContainer>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="John"
            value={employee.firstname}
            onChange={(e) => handleChange(e)}
            required
            minLength="2"
            error={errors.firstname || ""}
          />
          {errors.firstname && (
            <p style={{ position: "absolute", bottom: "-40px" }}>
              {errors.firstname}
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Doe"
            value={employee.lastname}
            onChange={(e) => handleChange(e)}
            required
            minLength="2"
            error={errors.lastname || ""}
          />
          {errors.lastname && (
            <p style={{ position: "absolute", bottom: "-40px" }}>
              {errors.lastname}
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="birthdate">Birth date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"fr"}>
            <DatePicker
              name="birthdate"
              value={(employee.birthdate && modifiedValueBirthdate) || null}
              onChange={(newValue) => {
                newValue &&
                  handleChange(newValue.format("DD/MM/YYYY"), "birthdate");
              }}
              renderInput={(params) => <TextField {...params} />}
              error={errors.birthdate || ""}
            />
          </LocalizationProvider>
          {errors.birthdate && (
            <p style={{ position: "absolute", bottom: "-40px" }}>
              {errors.birthdate}
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="startdate">Start date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"fr"}>
            <DatePicker
              name="startdate"
              value={(employee.startdate && modifiedValueStartDate) || null}
              onChange={(newValue) => {
                newValue &&
                  handleChange(newValue.format("DD/MM/YYYY"), "startdate");
              }}
              renderInput={(params) => <TextField {...params} />}
              error={errors.startdate || ""}
            />
          </LocalizationProvider>
          {errors.startdate && (
            <p style={{ position: "absolute", bottom: "-40px" }}>
              {errors.startdate}
            </p>
          )}
        </InputContainer>
      </FieldsetContainer>
      <FieldsetContainer>
        <legend>Adress</legend>
        <InputContainer>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="1 street of imagination"
            value={employee.street}
            onChange={(e) => handleChange(e)}
            required
            error={errors.street || ""}
          />
          {errors.street && (
            <p style={{ position: "absolute", bottom: "-40px" }}>
              {errors.street}
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Paris, Rennes ..."
            value={employee.city}
            onChange={(e) => handleChange(e)}
            required
            error={errors.city || ""}
          />
          {errors.city && (
            <p style={{ position: "absolute", bottom: "-40px" }}>
              {errors.city}
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="state">State</label>
          <input
            type=""
            id="state"
            name="state"
            placeholder="France, Canada..."
            value={employee.state}
            onChange={(e) => handleChange(e)}
            required
            error={errors.state || ""}
          />
          {errors.state && (
            <p style={{ position: "absolute", bottom: "-40px" }}>
              {errors.state}
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="number"
            id="zipcode"
            name="zipcode"
            placeholder="72000, 35000..."
            value={employee.zipcode}
            onChange={(e) => handleChange(e)}
            min="0"
            maxLength="5"
            required
            error={errors.zipcode || ""}
          />
          {errors.zipcode && (
            <p style={{ position: "absolute", bottom: "-40px" }}>
              {errors.zipcode}
            </p>
          )}
        </InputContainer>
      </FieldsetContainer>
      <FieldsetContainer>
        <legend>Department</legend>
        <InputContainer>
          <InputLabel id="department">Department</InputLabel>
          <Select
            labelId="department"
            id="department"
            name="department"
            value={employee.department}
            label="Age"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="Design">Design</MenuItem>
            <MenuItem value="RH">RH</MenuItem>
          </Select>
          {errors.department && (
            <p style={{ position: "absolute", bottom: "-40px" }}>
              {errors.department || ""}
            </p>
          )}
        </InputContainer>
      </FieldsetContainer>
      <SubmitButton type="submit" allIsValid={allFieldsAreValid} />
    </form>
  );
};

const FieldsetContainer = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid #131c38;
  margin-bottom: 20px;
  padding: 1em 2em;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1em 0 3em;
    grid-template-columns: 1fr;
    border: 0;
    border-radius: 5px;
    background-color: #1d3354;
    color: white;
    & legend {
      margin: auto;
      background-color: #1d3354;
      padding: 1em;
      border-radius: 5px;
    }
    & #department,
    .MuiInputBase-root {
      background-color: white;

      & legend {
        display: none;
      }
    }
    & .MuiList-root {
      background-color: blue;
    }
    & label#department {
      color: white;
      background-color: #1d3354;
    }
    & fieldset {
      display: none;
    }
  }
`;

const InputContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 30px;
  position: relative;
  & label {
    margin: 10px 0;
  }
  & input {
    height: 30px;
    padding: 0.5em;
    border: none;
    border-radius: 5px;
  }

  & input:not(.MuiInputBase-input) {
    border: ${(props) =>
      props.children[1].props.error !== "" ? "1px solid red" : ""};
  }

  & input.MuiInputBase-root {
    border: ${(props) =>
      props.children[1].props.children?.props?.error !== ""
        ? "1px solid red"
        : ""};
  }
`;
