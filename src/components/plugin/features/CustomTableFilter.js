import styled from "styled-components";

export const CustomTableFilter = ({ onFilter }) => {
  const options = [10, 25, 50, 100];

  return (
    <TableFilter>
      <span>Show</span>
      <select onChange={(e) => onFilter(e)}>
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
      <span>entries</span>
    </TableFilter>
  );
};

const TableFilter = styled.span`
  margin-bottom: 2em;
  & span {
    margin: 0 0.2em;
  }
  & select {
    border: none;
    border-radius: 5px;
    padding: 0.4em 1em;
    margin: 0 0.5em;
  }
`;
