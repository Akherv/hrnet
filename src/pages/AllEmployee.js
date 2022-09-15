import { useSelector } from "react-redux";
import styled from "styled-components";

import { CustomTable } from "@smerinthee/custom-table";

export const AllEmployee = () => {
  //fetch the datas from the store
  const employees = useSelector((state) => state.employee.arr);

  //Define the table h1
  const tableTitle = "All Employees";

  //Define the columns title & type
  const columns = [
    { title: "Firstname", type: "firstname" },
    { title: "Lastname", type: "lastname" },
    { title: "Start Date", type: "startdate" },
    { title: "Department", type: "department" },
    { title: "Birth Date", type: "birthdate" },
    { title: "Street", type: "street" },
    { title: "City", type: "city" },
    { title: "State", type: "state" },
    { title: "Zip Code", type: "zipcode" },
  ];
  const sortDefault = "lastname";
  const entriesArr = [10, 25, 50, 100];
  const entriesDefaultLimit = 10;
  const customColors = {
    bg_1: "#c9d8c5",
    bg_2: "#1d3354",
    bg_3: "whitesmoke",
    bg_4: "rgba(255,255,255,0.5)",
    fontColor: "#1d3354",
    fontColorLabel: "#fff",
  };

  return (
    <AllEmployeeContainer>
      <CustomTable
        datas={employees}
        tableTitle={tableTitle}
        columns={columns}
        sortDefault={sortDefault}
        entriesArr={entriesArr}
        entriesDefaultLimit={entriesDefaultLimit}
        customColors={customColors}
      />
    </AllEmployeeContainer>
  );
};

const AllEmployeeContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #c9d8c5;

  @media screen and (max-width: 1320px) {
    width: 100vw;
  }
`;
