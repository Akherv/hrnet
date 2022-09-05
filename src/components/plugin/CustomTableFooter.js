import { useState, useEffect } from "react";
import styled from "styled-components";

export const CustomTableFooter = ({
  employees,
  employeesSearch,
  entries,
  currentPage,
  handleFilterPages,
  employeesFiltered,
}) => {
  const [pagination, setPagination] = useState();

  useEffect(() => {
    const createPages = () => {
      let arrPages = [];
      let employeeLength = employees.length;
      let pages =
        employeesSearch.length > 0
          ? Math.ceil(employeesSearch.length / entries)
          : Math.ceil(employeeLength / entries);
      for (let i = 0; i < pages; i++) {
        arrPages.push(i + 1);
      }
      setPagination(arrPages);
    };
    createPages();
  }, [entries, employees.length, employeesSearch, employeesFiltered]);

  return (
    <Footer>
      <InfoPagination>
        <span>Showing</span>
        <InfoPaginationNumber>
          {entries * currentPage - entries + 1}
        </InfoPaginationNumber>
        <span>to</span>
        <InfoPaginationNumber>
          {employeesSearch.length > 0 &&
          employeesSearch.length < entries * currentPage
            ? employeesSearch.length
            : entries * currentPage}
        </InfoPaginationNumber>
        <span>of</span>
        <InfoPaginationNumber>
          {employeesSearch.length > 0
            ? employeesSearch.length
            : employees.length}
        </InfoPaginationNumber>
        <span>entries</span>
      </InfoPagination>
      <Pagination>
        <span>Previous</span>
        <ul>
          {pagination &&
            pagination.map((el, idx) => {
              return (
                <Pages key={idx} onClick={() => handleFilterPages(el, idx)}>
                  <InfoPaginationNumber>{el}</InfoPaginationNumber>
                </Pages>
              );
            })}
        </ul>
        <span>Next</span>
      </Pagination>
    </Footer>
  );
};

const Footer = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
`;

const InfoPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    margin: 0 0.2em;
  }
`;

const InfoPaginationNumber = styled.div`
  font-weight: 600;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & ul {
    margin: 0 1em;
    display: flex;
  }
`;

const Pages = styled.li`
  display: flex;
  margin: 0 0.5em;
  cursor: pointer;
`;
