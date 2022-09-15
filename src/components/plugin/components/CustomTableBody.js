import { useState } from "react";
import styled from "styled-components";

import { normalizeSearch } from "../utils/Utils";
import { CustomTableSort } from "../features/CustomTableSort";

export const CustomTableBody = ({
  customColors,
  columns,
  onSort,
  sort,
  calculatedRows,
  searchWord,
}) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <Table customColors={customColors}>
      <thead>
        <CustomTr
          className="sortTitle"
          onClick={() => setToggleOpen(!toggleOpen)}
          numberCol={columns.length}
        >
          <td>
            Sort table <span>{toggleOpen === false ? "▲" : "▼"}</span>
          </td>
        </CustomTr>
        <CustomTr
          className={toggleOpen === false ? "hide" : ""}
          numberCol={columns.length}
        >
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
        </CustomTr>
      </thead>
      <tbody>
        {calculatedRows.length > 0 ? (
          calculatedRows.map((row) => {
            return (
              <CustomTr key={row.id} numberCol={columns.length}>
                {columns.map((column, idx) => {
                  return (
                    <td
                      className={
                        searchWord.length !== 0 &&
                        normalizeSearch(row[column.type])
                          .toString()
                          .includes(searchWord)
                          ? "boldStyle"
                          : ""
                      }
                      key={idx}
                      style={{
                        backgroundColor:
                          column.type === sort.type
                            ? `${customColors.bg_4}`
                            : "",
                      }}
                      title={row[column.type]}
                      data-label={column.title}
                    >
                      <span className="columnTitle">{`${column.title} :`}</span>
                      {row[column.type]}
                    </td>
                  );
                })}
              </CustomTr>
            );
          })
        ) : (
          <tr>
            <td>No matching</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  margin-top: 2em;
  & thead {
    display: block;
    border-bottom: 1px solid grey;
    background-color: ${(props) => `${props.customColors.bg_2}`};
    color: ${(props) => `${props.customColors.fontColorLabel}`};
    & tr {
      padding: 0;
    }
    & .sortTitle {
      display: none;
      font-size: 16px;
      & td > span {
        font-size: 20px;
      }
    }
    & td {
      display: flex;
      font-weight: 600;
      justify-content: space-between;
      & :last-child {
        width: 40px;
        margin: 0 0.2em 0 0;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  & tbody {
    height: 100%;
    & tr:nth-of-type(1n) {
      background-color: ${(props) => `${props.customColors.bg_1}`};
    }
    & tr:nth-of-type(2n) {
      background-color: ${(props) => `${props.customColors.bg_3}`};
    }
    & td {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 18px;
      height: 30px;
      &.hide {
        display: none;
      }
      & span {
        display: none;
        font-weight: 600;
        margin: 0 0.2em;
      }
    }
    .boldStyle {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1320px) {
    order: 2;
    padding-top: 2em;
    margin-top: 0;
    & thead {
      justify-content: center;
      background-color: #e4ebe2;
      color: #1d3354;
      & .sortTitle {
        height: 100%;
        width: 100%;
        margin: 0;
        border-radius: 0;
        display: block;
        cursor: pointer;
        box-shadow: 1px 1px 1px gray;
        background-color: #e4ebe2;
        color: #1d3354;
      }
    }

    thead > tr {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 1em auto;
      &.hide {
        display: none;
      }
      & td {
        & :last-child {
          width: 20px;
        }
      }
    }
    tbody {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background-color: ${(props) => `${props.customColors.bg_2}`};
      padding: 1em;
      & tr:nth-of-type(2n) {
        background-color: ${(props) => `${props.customColors.bg_1}`};
      }
      & td {
        & span {
          display: inline-block;
        }
      }
    }
    tbody > tr {
      width: 33%;
      display: flex;
      flex-direction: column;
      margin: 0.5em;
    }
  }

  @media screen and (max-width: 800px) {
    tbody > tr {
      width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    tbody > tr {
      width: 80%;
      margin: 0 0 0.5em;
    }
  }
`;

const CustomTr = styled.tr`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.numberCol}, 1fr)`};
  border-radius: 5px;
  & td {
    padding: 0.5em 1em 0.5em;
  }
  &.fullwidth {
    grid-template-columns: 1fr;
  }
`;
