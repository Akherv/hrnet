import styled from "styled-components";
import { CustomTable } from "../components/plugin/CustomTable";

export const AllEmployee = () => {
  return (
    <AllEmployeeContainer>
      <CustomTable />
    </AllEmployeeContainer>
  );
};

const AllEmployeeContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #c9d8c5;
  padding: 0 2em;
`;
