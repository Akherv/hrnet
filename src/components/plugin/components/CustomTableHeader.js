import styled from "styled-components";

import { CustomTableFilter } from "../features/CustomTableFilter";
import { CustomTableSearch } from "../features/CustomTableSearch";

export const CustomTableHeader = ({ onFilter, onSearch }) => {
  return (
    <TableHeader>
      <CustomTableFilter onFilter={onFilter} />
      <CustomTableSearch onSearch={onSearch} />
    </TableHeader>
  );
};

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1320px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
