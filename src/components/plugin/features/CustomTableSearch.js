import styled from "styled-components";

export const CustomTableSearch = ({ onSearch }) => {
  return (
    <TableSearch>
      <span>search</span>
      <input type="text" onChange={(e) => onSearch(e)} />
    </TableSearch>
  );
};

const TableSearch = styled.div`
  padding: 0 1em;
  & span {
    margin: 0 0.2em;
  }
  & input {
    padding: 0.4em 1em;
    margin-left: 0.5em;
    border-radius: 5px;
    border: none;
  }
  & input:focus {
    outline: none;
    border: 1px solid #131c38;
  }
`;
