import styled from "styled-components";

export const CustomTableSort = ({ column, sort, onSort }) => {
  return (
    <IconSort onClick={() => onSort(`${column}`)}>
      {column === sort.type ? (sort.order === "up" ? "▲" : "▼") : "▹"}
    </IconSort>
  );
};

const IconSort = styled.span`
  cursor: pointer;
  margin-left: 0.2em;
`;
