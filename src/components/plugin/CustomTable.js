import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { dateSort, stringSort } from "./Utils";
import { SortIcon } from "../SortIcon";
import { CustomTableFooter } from "./CustomTableFooter";

export const CustomTable = () => {
  const employees = useSelector((state) => state.employee.arr);

  const [entries, setEntries] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const [employeesArr, setEmployeesArr] = useState(employees);
  const [currentPage, setcurrentPage] = useState(1);
  const [employeesSorted, setEmployeesSorted] = useState([]);
  const [employeesFiltered, setEmployeesFiltered] = useState([]);
  const [employeesSearchSorted, setEmployeesSearchSorted] = useState([]);
  const [employeesSearch, setEmployeesSearch] = useState([]);
  const [type, setType] = useState(true);
  const [searchWord, setSearchWord] = useState([]);

  const handleSortColumn = (column) => {
    switch (column) {
      case "firstname":
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                stringSort(a.firstname, b.firstname, type)
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) =>
                stringSort(a.firstname, b.firstname, type)
              )
            );
        break;
      case "lastname":
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                stringSort(a.lastname, b.lastname, type)
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) =>
                stringSort(a.lastname, b.lastname, type)
              )
            );
        break;
      case "startdate":
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                dateSort(a.startdate, b.startdate, type)
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) =>
                dateSort(a.startdate, b.startdate, type)
              )
            );
        break;
      case "department":
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                stringSort(a.department, b.department, type)
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) =>
                stringSort(a.department, b.department, type)
              )
            );
        break;
      case "birthdate":
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                dateSort(a.birthdate, b.birthdate, type)
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) =>
                dateSort(a.birthdate, b.birthdate, type)
              )
            );
        break;
      case "street":
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                stringSort(a.street, b.street, type)
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) =>
                stringSort(a.street, b.street, type)
              )
            );
        break;
      case "city":
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                stringSort(a.city, b.city, type)
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) => stringSort(a.city, b.city, type))
            );
        break;
      case "state":
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                stringSort(a.state, b.state, type)
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) => stringSort(a.state, b.state, type))
            );
        break;
      case "zipcode":
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                type ? b.zipcode - a.zipcode : a.zipcode - b.zipcode
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) =>
                type ? b.zipcode - a.zipcode : a.zipcode - b.zipcode
              )
            );
        break;
      default:
        employeesSearch.length > 0
          ? setEmployeesSearchSorted(
              [...employeesSearch].sort((a, b) =>
                stringSort(a.lastname, b.lastname, type)
              )
            )
          : setEmployeesSorted(
              [...employees].sort((a, b) =>
                stringSort(a.lastname, b.lastname, type)
              )
            );
        break;
    }
  };

  const handleFilterEntries = (e) => {
    // setEmployeesSorted(
    //   [...employeesSorted].filter((employee, idx) => {
    //     return idx <= e.target.value;
    //   })
    // );
    setEntries(e.target.value);
    setcurrentPage(1);
  };

  const handleFilterPages = (el, pagesIdx) => {
    employeesSearchSorted.length > 0
      ? setEmployeesFiltered(
          [...employeesSearchSorted].filter((employee, idx) => {
            return (
              idx >= entries * (pagesIdx + 1) - entries &&
              idx < entries * (pagesIdx + 1)
            );
          })
        )
      : setEmployeesFiltered(
          [...employeesSorted].filter((employee, idx) => {
            return (
              idx >= entries * (pagesIdx + 1) - entries &&
              idx < entries * (pagesIdx + 1)
            );
          })
        );
    setcurrentPage(pagesIdx + 1);
  };

  useEffect(() => {
    const res = [...employeesArr].sort((a, b) =>
      stringSort(a.lastname, b.lastname, "asc")
    );
    setEmployeesSorted(res);
  }, [employeesArr]);

  useEffect(() => {
    const res = [...employeesSearchSorted].filter((employee, idx) => {
      return (
        idx >= entries * currentPage - entries && idx < entries * currentPage
      );
    });
    setEmployeesFiltered(res);
  }, [employeesSearchSorted, currentPage, entries]);

  //
  useEffect(() => {
    const res =
      employeesSearch.length > 0
        ? [...employeesSearch].filter((employee, idx) => {
            if (currentPage === 1) {
              return idx < entries;
            } else {
              return (
                idx >= entries * currentPage - entries + 1 &&
                idx < entries * currentPage + 1
              );
            }
          })
        : [...employeesSorted].filter((employee, idx) => {
            if (currentPage === 1) {
              return idx < entries;
            } else {
              return (
                idx >= entries * currentPage - entries + 1 &&
                idx < entries * currentPage + 1
              );
            }
          });
    setEmployeesFiltered(res);
  }, [employeesSearch, employeesSorted, entries, currentPage]);

  const handleSearch = (e) => {
    if (e.target.value.length === 0) {
      [...employeesSorted].filter((employee, idx) => {
        setEmployeesSearch([]);
        setcurrentPage(1);
        setSearchWord([]);
        return idx < entries;
      });
    } else {
      let arrVal = [];
      // eslint-disable-next-line array-callback-return
      const res = [...employeesSorted].filter((employee) => {
        for (const [, val] of Object.entries(employee)) {
          if (typeof val === "number") {
            const valString = toString(val);
            if (
              valString.toLowerCase().includes(e.target.value.toLowerCase())
            ) {
              arrVal.push(val);
              return employee;
            }
          } else {
            if (val.toLowerCase().includes(e.target.value.toLowerCase())) {
              arrVal.push(val);
              return employee;
            }
          }
        }
        setSearchWord(arrVal);
      });
      setEmployeesSearch(res);
      setEmployeesFiltered(res);
    }
  };

  const handleType = (typeRes) => {
    setType(typeRes);
  };

  return (
    <ContainerTable>
      <h1>All Employee</h1>
      <TableHeader>
        <TableEntrieFilter>
          <span>Show</span>
          <select onChange={(e) => handleFilterEntries(e)}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>entries</span>
        </TableEntrieFilter>
        <TableSearch>
          <span>search</span>
          <input type="text" onChange={(e) => handleSearch(e)} />
        </TableSearch>
      </TableHeader>
      <Table>
        <thead>
          <tr>
            <td>
              First Name
              <IconSort onClick={() => handleSortColumn("firstname")}>
                <SortIcon handleType={handleType} />
              </IconSort>
            </td>
            <td>
              Last Name
              <IconSort onClick={() => handleSortColumn("lastname")}>
                <SortIcon handleType={handleType} />
              </IconSort>
            </td>
            <td>
              Start Date{" "}
              <IconSort onClick={() => handleSortColumn("startdate")}>
                <SortIcon handleType={handleType} />
              </IconSort>
            </td>
            <td>
              Departement{" "}
              <IconSort onClick={() => handleSortColumn("department")}>
                <SortIcon handleType={handleType} />
              </IconSort>
            </td>
            <td>
              Date of Birth{" "}
              <IconSort onClick={() => handleSortColumn("birthdate")}>
                <SortIcon handleType={handleType} />
              </IconSort>
            </td>
            <td>
              Street{" "}
              <IconSort onClick={() => handleSortColumn("street")}>
                <SortIcon handleType={handleType} />
              </IconSort>
            </td>
            <td>
              City{" "}
              <IconSort onClick={() => handleSortColumn("city")}>
                <SortIcon handleType={handleType} />
              </IconSort>
            </td>
            <td>
              State{" "}
              <IconSort onClick={() => handleSortColumn("state")}>
                <SortIcon handleType={handleType} />
              </IconSort>
            </td>
            <td>
              ZIP Code{" "}
              <IconSort onClick={() => handleSortColumn("zipcode")}>
                <SortIcon handleType={handleType} />
              </IconSort>
            </td>
          </tr>
        </thead>
        <tbody>
          {employeesFiltered && employeesFiltered.length > 0 ? (
            [...employeesFiltered].map((employee, idx) => {
              return (
                <tr key={idx}>
                  <td
                    className={
                      searchWord && searchWord.includes(employee.firstname)
                        ? "boldStyle"
                        : ""
                    }
                  >
                    {employee.firstname}
                  </td>
                  <td
                    className={
                      searchWord && searchWord.includes(employee.lastname)
                        ? "boldStyle"
                        : ""
                    }
                  >
                    {employee.lastname}
                  </td>
                  <td
                    className={
                      searchWord && searchWord.includes(employee.startdate)
                        ? "boldStyle"
                        : ""
                    }
                  >
                    {employee.startdate}
                  </td>
                  <td
                    className={
                      searchWord && searchWord.includes(employee.department)
                        ? "boldStyle"
                        : ""
                    }
                  >
                    {employee.department}
                  </td>
                  <td
                    className={
                      searchWord && searchWord.includes(employee.birthdate)
                        ? "boldStyle"
                        : ""
                    }
                  >
                    {employee.birthdate}
                  </td>
                  <td
                    className={
                      searchWord && searchWord.includes(employee.street)
                        ? "boldStyle"
                        : ""
                    }
                  >
                    {employee.street}
                  </td>
                  <td
                    className={
                      searchWord && searchWord.includes(employee.city)
                        ? "boldStyle"
                        : ""
                    }
                  >
                    {employee.city}
                  </td>
                  <td
                    className={
                      searchWord && searchWord.includes(employee.state)
                        ? "boldStyle"
                        : ""
                    }
                  >
                    {employee.state}
                  </td>
                  <td
                    className={
                      searchWord && searchWord.includes(employee.zipcode)
                        ? "boldStyle"
                        : ""
                    }
                  >
                    {employee.zipcode}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="fullwidth">
              <td>No Employee</td>
            </tr>
          )}
        </tbody>
      </Table>
      <CustomTableFooter
        employees={employees}
        employeesSearch={employeesSearch}
        entries={entries}
        currentPage={currentPage}
        handleFilterPages={handleFilterPages}
        employeesFiltered={employeesFiltered}
      />
    </ContainerTable>
  );
};

const ContainerTable = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2em;

  & table {
    width: 100%;
    /* background-color: #c9d8c5; */
    & thead {
      display: block;
      height: 10%;
      border-bottom: 1px solid grey;

      & td {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    & tbody {
      height: 100%;
    }
    & tr {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      border-radius: 5px;

      & td {
        padding: 0.5em;
      }

      &.fullwidth {
        grid-template-columns: 1fr;
      }
    }
    & tr:nth-of-type(2n) {
      background-color: whitesmoke;
    }
  }
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TableEntrieFilter = styled.span`
  margin-bottom: 2em;
  & span {
    margin: 0 0.2em;
  }
`;

const TableSearch = styled.div`
  margin-bottom: 2em;
  & span {
    margin-right: 0.2em;
  }
`;

const Table = styled.table`
  & thead {
    & td {
      font-weight: 600;
    }
  }
`;

const IconSort = styled.span`
  cursor: pointer;
`;
