import { useState, useRef } from "react";
import styled from "styled-components";

export const CustomTableFilter = ({
  onFilter,
  entriesArr,
  entriesDefaultLimit,
}) => {
  const [selectedEntrie, setSelectedEntrie] = useState(entriesDefaultLimit);
  const selectRef = useRef();
  return (
    <TableFilter>
      <span>Show</span>
      <select
        onChange={(e) => {
          onFilter(e);
          setSelectedEntrie(selectRef.current?.value);
        }}
        ref={selectRef}
        value={selectedEntrie}
      >
        {entriesArr.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
      <span>entries</span>
    </TableFilter>
  );
};

const TableFilter = styled.span`
  padding: 0 1em;
  margin-bottom: 1em;
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
