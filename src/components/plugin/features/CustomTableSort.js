import styled from "styled-components";

export const CustomTableSort = ({ column, sort, onSort }) => {
  return (
    <IconSort onClick={() => onSort(`${column}`)}>
      <span>
        {column === sort.type ? (sort.order === "up" ? "▲" : "▼") : "▹"}
      </span>
    </IconSort>
  );
};

const IconSort = styled.span`
  cursor: pointer;
`;
