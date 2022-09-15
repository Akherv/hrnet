import styled from "styled-components";
import { CustomTablePagination } from "../features/CustomTablePagination";

export const CustomTableFooter = ({
  customColors,
  currentPage,
  setCurrentPage,
  maxRows,
  totalRows,
  totalPages,
}) => {
  return (
    <Footer>
      <InfoPagination>
        Showing
        <span>
          {totalRows > 0
            ? totalRows === maxRows * currentPage - maxRows + 1
              ? totalRows
              : maxRows * currentPage - maxRows + 1
            : 0}
        </span>
        to
        <span>
          {totalRows < maxRows * currentPage
            ? totalRows
            : maxRows * currentPage}
        </span>
        of
        <span>{totalRows}</span>
        entries
      </InfoPagination>
      <CustomTablePagination
        customColors
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Footer>
  );
};

const Footer = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InfoPagination = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & span {
    margin: 1em 0.2em;
    font-weight: 600;
  }
  @media screen and (max-width: 1320px) {
    width: 100%;
    justify-content: center;
  }
`;
