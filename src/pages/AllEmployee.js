import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadEmployee } from "../slices/employeeSlice";
import { CustomTable } from "../components/plugin/CustomTable";

export const AllEmployee = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(loadEmployee());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

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
  @media screen and (max-width: 1200px) {
    width: 100vw;
  }
`;
