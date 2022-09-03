import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const AllEmployee = () => {
  const employees = useSelector((state) => state.employee.arr);

  const [entries, setEntries] = useState(10);
  const [employeesArr, setEmployeesArr] = useState(employees);
  const [pagination, setPagination] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [employeesSorted, setEmployeesSorted] = useState([]);
  const [employeesFiltered, setEmployeesFiltered] = useState([]);

  const stringSort = (val_a, val_b, type) => {
    let a = val_a.toLowerCase();
    let b = val_b.toLowerCase();
    if (type === "asc") {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    } else {
      if (b < a) {
        return -1;
      }
      if (b > a) {
        return 1;
      }
      return 0;
    }
  };

  const dateSort = (val_a, val_b, type) => {
    let a = val_a.split("/");
    let b = val_b.split("/");

    let da = new Date(`${a[2]}-${a[1]}-${a[0]}`);
    let db = new Date(`${b[2]}-${b[1]}-${b[0]}`);

    if (type === "asc") {
      if (da < db) {
        return -1;
      }
      if (da > db) {
        return 1;
      }
      return 0;
    } else {
      if (db < da) {
        return -1;
      }
      if (db > da) {
        return 1;
      }
      return 0;
    }
  };

  const handleSortColumn = (column, type) => {
    switch (column) {
      case "firstname":
        setEmployeesSorted(
          [...employees].sort((a, b) =>
            stringSort(a.firstname, b.firstname, type)
          )
        );
        break;
      case "lastname":
        setEmployeesSorted(
          [...employees].sort((a, b) =>
            stringSort(a.lastname, b.lastname, type)
          )
        );
        break;
      case "startdate":
        setEmployeesSorted(
          [...employees].sort((a, b) =>
            dateSort(a.startdate, b.startdate, type)
          )
        );
        break;
      case "department":
        setEmployeesSorted(
          [...employees].sort((a, b) =>
            stringSort(a.department, b.department, type)
          )
        );
        break;
      case "birthdate":
        setEmployeesSorted(
          [...employees].sort((a, b) =>
            dateSort(a.birthdate, b.birthdate, type)
          )
        );
        break;
      case "street":
        setEmployeesSorted(
          [...employees].sort((a, b) => stringSort(a.street, b.street, type))
        );
        break;
      case "city":
        setEmployeesSorted(
          [...employees].sort((a, b) => stringSort(a.city, b.city, type))
        );
        break;
      case "state":
        setEmployeesSorted(
          [...employees].sort((a, b) => stringSort(a.state, b.state, type))
        );
        break;
      case "zipcode":
        setEmployeesSorted(
          [...employees].sort((a, b) =>
            type === "asc" ? b.zipcode - a.zipcode : a.zipcode - b.zipcode
          )
        );
        break;
      default:
        setEmployeesSorted(
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
    setEmployeesFiltered(
      [...employeesSorted].filter((employee, idx) => {
        console.log(
          entries,
          pagesIdx + 1,
          entries * (pagesIdx + 1) - entries,
          entries * (pagesIdx + 1)
        );
        return (
          idx >= entries * (pagesIdx + 1) - entries &&
          idx < entries * (pagesIdx + 1)
        );
      })
    );
    setcurrentPage(pagesIdx + 1);
  };

  useEffect(() => {
    const createPages = () => {
      let arrPages = [];
      let pages = employees.length / entries;
      for (let i = 0; i < pages; i++) {
        arrPages.push(i + 1);
      }
      setPagination(arrPages);
    };
    createPages();
  }, [entries, employees.length]);

  useEffect(() => {
    const res = [...employeesArr].sort((a, b) =>
      stringSort(a.lastname, b.lastname, "asc")
    );
    setEmployeesSorted(res);
  }, [employeesArr]);

  useEffect(() => {
    const res = [...employeesSorted].filter((employee, idx) => {
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
  }, [employeesSorted, entries, currentPage]);

  const handleSearch = (e) => {
    const res = [...employeesSorted].filter((employee, idx) => {
      if (e.target.value) {
        for (const [key, val] of Object.entries(employee)) {
          if (typeof val === "number") {
            const valString = toString(val);
            if (
              valString.toLowerCase().includes(e.target.value.toLowerCase())
            ) {
              return employee;
            }
          } else {
            if (val.toLowerCase().includes(e.target.value.toLowerCase())) {
              return employee;
            }
          }
        }
      } else {
        return idx < entries;
      }
    });
    setEmployeesFiltered(res);
  };

  return (
    <ContainerTable>
      <h1>All Employee</h1>
      <TableHeader>
        <TableEntrieFilter>
          Show
          <select onChange={(e) => handleFilterEntries(e)}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          entries
        </TableEntrieFilter>
        <TableSearch>
          search
          <input type="text" onChange={(e) => handleSearch(e)} />
        </TableSearch>
      </TableHeader>

      <Table>
        <thead>
          <tr>
            <td>
              First Name
              <IconSort onClick={() => handleSortColumn("firstname", "asc")}>
                ▲
              </IconSort>
              <IconSort onClick={() => handleSortColumn("firstname")}>
                ▼
              </IconSort>
            </td>
            <td>
              Last Name{" "}
              <IconSort onClick={() => handleSortColumn("lastname", "asc")}>
                ▲
              </IconSort>
              <IconSort onClick={() => handleSortColumn("lastname")}>
                ▼
              </IconSort>
            </td>
            <td>
              Start Date{" "}
              <IconSort onClick={() => handleSortColumn("startdate", "asc")}>
                ▲
              </IconSort>
              <IconSort onClick={() => handleSortColumn("startdate")}>
                ▼
              </IconSort>
            </td>
            <td>
              Departement{" "}
              <IconSort onClick={() => handleSortColumn("department", "asc")}>
                ▲
              </IconSort>
              <IconSort onClick={() => handleSortColumn("department")}>
                ▼
              </IconSort>
            </td>
            <td>
              Date of Birth{" "}
              <IconSort onClick={() => handleSortColumn("birthdate", "asc")}>
                ▲
              </IconSort>
              <IconSort onClick={() => handleSortColumn("birthdate")}>
                ▼
              </IconSort>
            </td>
            <td>
              Street{" "}
              <IconSort onClick={() => handleSortColumn("street", "asc")}>
                ▲
              </IconSort>
              <IconSort onClick={() => handleSortColumn("street")}>▼</IconSort>
            </td>
            <td>
              City{" "}
              <IconSort onClick={() => handleSortColumn("city", "asc")}>
                ▲
              </IconSort>
              <IconSort onClick={() => handleSortColumn("city")}>▼</IconSort>
            </td>
            <td>
              State{" "}
              <IconSort onClick={() => handleSortColumn("state", "asc")}>
                ▲
              </IconSort>
              <IconSort onClick={() => handleSortColumn("state")}>▼</IconSort>
            </td>
            <td>
              ZIP Code{" "}
              <IconSort onClick={() => handleSortColumn("zipcode", "asc")}>
                ▲
              </IconSort>
              <IconSort onClick={() => handleSortColumn("zipcode")}>▼</IconSort>
            </td>
          </tr>
        </thead>
        <tbody>
          {employeesFiltered && employeesFiltered.length > 0 ? (
            [...employeesFiltered].map((employee, idx) => {
              return (
                <tr key={idx}>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.startdate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.birthdate}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipcode}</td>
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
      <Footer>
        <span>
          Showing
          {entries * currentPage - entries + 1}
          to
          {entries * currentPage}
          of
          {employees.length}
          entries
        </span>
        <Pagination>
          <span>Previous</span>
          <ul>
            {pagination &&
              pagination.map((el, idx) => {
                return (
                  <Pages key={idx} onClick={() => handleFilterPages(el, idx)}>
                    {el}
                  </Pages>
                );
              })}
          </ul>
          <span>Next</span>
        </Pagination>
      </Footer>
    </ContainerTable>
  );
};

const ContainerTable = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #c9d8c5;
  padding: 0 2em;

  & table {
    width: 100%;
    background-color: #c9d8c5;
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
`;

const TableSearch = styled.div`
  margin-bottom: 2em;
`;

const Table = styled.table``;

const IconSort = styled.span`
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & ul {
    margin: 0 1em;
    display: flex;
  }
`;

const Pages = styled.li`
  display: flex;
  margin: 0 0.5em;
  cursor: pointer;
`;
