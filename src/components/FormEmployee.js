import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SubmitButton from "./SubmitButton";

export const FormEmployee = ({ handleSubmit, setEmployee, employee }) => {
  const normalizeDate = (date) => {
    const dateArr = date.toISOString().slice(0, 10).split("-");
    const newDateArr = [dateArr[2], dateArr[1], dateArr[0]];
    const newDateString = newDateArr.join("/");
    return newDateString;
  };
  return (
    <form onSubmit={handleSubmit}>
      <FieldsetContainer>
        <legend>Identity</legend>
        <InputContainer>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            placeholder="Employee firstname"
            value={employee.firstname}
            onChange={(e) =>
              setEmployee({ ...employee, firstname: e.target.value })
            }
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            placeholder="Employee lastname"
            value={employee.lastname}
            onChange={(e) =>
              setEmployee({ ...employee, lastname: e.target.value })
            }
            required
          />
        </InputContainer>
        {/* <InputContainer>
          <label htmlFor="birthdate">Birth date</label>
          <input
            type="date"
            id="birthdate"
            placeholder="dd/mm/yyyy"
            value={employee.birthdate}
            onChange={(e) =>
              setEmployee({ ...employee, birthdate: e.target.value })
            }
            required
          />
        </InputContainer> */}
        <InputContainer>
          <label htmlFor="birthdate">Birth date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              value={employee.birthdate}
              onChange={(newValue) => {
                setEmployee({
                  ...employee,
                  birthdate: normalizeDate(newValue.$d),
                });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </InputContainer>
        {/* <InputContainer>
          <label htmlFor="startdate">Start date</label>
          <input
            type="date"
            id="startdate"
            placeholder="dd/mm/yyyy"
            value={employee.startdate}
            onChange={(e) =>
              setEmployee({ ...employee, startdate: e.target.value })
            }
            required
          />
        </InputContainer> */}
        <InputContainer>
          <label htmlFor="startdate">Start date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              value={employee.startdate}
              onChange={(newValue) => {
                setEmployee({
                  ...employee,
                  startdate: normalizeDate(newValue.$d),
                });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </InputContainer>
      </FieldsetContainer>
      <FieldsetContainer>
        <legend>Adress</legend>
        <InputContainer>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            placeholder="Street"
            value={employee.street}
            onChange={(e) =>
              setEmployee({ ...employee, street: e.target.value })
            }
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="City"
            value={employee.city}
            onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="state">State</label>
          <input
            type=""
            id="state"
            placeholder="State"
            value={employee.state}
            onChange={(e) =>
              setEmployee({ ...employee, state: e.target.value })
            }
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="number"
            id="zipcode"
            placeholder="00000"
            value={employee.zipcode}
            onChange={(e) =>
              setEmployee({ ...employee, zipcode: e.target.value })
            }
            required
          />
        </InputContainer>
      </FieldsetContainer>
      <FieldsetContainer>
        <legend>Department</legend>
        <InputContainer>
          <InputLabel id="department">Department</InputLabel>
          <Select
            labelId="department"
            id="department"
            placeholder="choose a department"
            value={employee.department}
            label="Age"
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="Design">Design</MenuItem>
            <MenuItem value="RH">RH</MenuItem>
          </Select>
        </InputContainer>
      </FieldsetContainer>
      <SubmitButton type="submit" />
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

  & label {
    margin: 10px 0;
  }
  & input {
    height: 30px;
    padding: 0.5em;
    border: none;
    border-radius: 5px;
  }
`;
