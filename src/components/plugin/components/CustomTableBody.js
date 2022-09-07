import { normalize } from "../utils/Utils";
import { CustomTableSort } from "../features/CustomTableSort";
import styled from "styled-components";
import { useState } from "react";

export const CustomTableBody = ({
  columns,
  onSort,
  sort,
  calculatedRows,
  searchWord,
}) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <Table>
      <thead>
        <tr className="sortTitle" onClick={() => setToggleOpen(!toggleOpen)}>
          <td>Sort table {toggleOpen === false ? "▲" : "▼"}</td>
        </tr>
        <tr className={toggleOpen === false ? "hide" : ""}>
          {columns.map((column, idx) => {
            return (
              <td key={idx}>
                <span>{column.title}</span>
                <CustomTableSort
                  column={column.type}
                  sort={sort}
                  onSort={onSort}
                />
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {calculatedRows.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map((column, idx) => {
                return (
                  <td
                    className={
                      searchWord.length !== 0 &&
                      normalize(row[column.type])
                        .toString()
                        .includes(searchWord)
                        ? "boldStyle"
                        : ""
                    }
                    key={idx}
                  >
                    {row[column.type]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
const Table = styled.table`
  width: 100%;
  & thead {
    display: block;
    height: 10%;
    border-bottom: 1px solid grey;
    & td {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      & span {
        margin: 0.2em;
      }
    }
  }

  & tbody {
    height: 100%;

    & tr:nth-of-type(2n) {
      background-color: whitesmoke;
    }
  }
  & tr {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    border-radius: 5px;

    &.sortTitle {
      transform: scale(0);
    }

    & td {
      padding: 0.5em;
    }

    &.fullwidth {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 1200px) {
    order: 2;
    background-color: rgba(255, 255, 255, 0.2);

    & thead {
      justify-content: center;
    }

    thead > tr {
      width: 80%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 1em auto;
      &.sortTitle {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 1em 0;
        transform: scale(1);
        display: block;
        border-radius: 0;
        cursor: pointer;
        box-shadow: 1px 1px 1px gray;
        background-color: rgba(255, 255, 255, 0.5);
      }
      & td {
        display: inline;
        text-align: left;
        width: 150px;
      }
      &.hide {
        display: none;
      }
    }
    tbody {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    tbody > tr {
      width: 33%;
      min-width: 250px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px -5px 5px rgba(201, 216, 197, 0.8);
      border-bottom: 2px solid gray;
    }
  }
  @media screen and (max-width: 800px) {
    tbody > tr {
      width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    tbody > tr {
      width: 100%;
    }
  }
`;
