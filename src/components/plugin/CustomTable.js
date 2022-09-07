import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { filterRows, sortRows, paginateRows } from "./utils/Utils";
import { CustomTableHeader } from "./components/CustomTableHeader";
import { CustomTableBody } from "./components/CustomTableBody";
import { CustomTableFooter } from "./components/CustomTableFooter";

export const CustomTable = () => {
  //fetch the datas from the store
  const employees = useSelector((state) => state.employee.arr);

  //Define the table h1
  const tableTitle = "All Employee";

  //Define the columns title & type
  const columns = [
    { title: "Firstname", type: "firstname" },
    { title: "Lastname", type: "lastname" },
    { title: "Start Date", type: "startdate" },
    { title: "Department", type: "department" },
    { title: "Birth Date", type: "birthdate" },
    { title: "Street", type: "street" },
    { title: "City", type: "city" },
    { title: "State", type: "state" },
    { title: "Zip Code", type: "zipcode" },
  ];
  const [rows, setRows] = useState([]);

  //Fill the rows local state with the datas fetched from the store
  useEffect(() => {
    setRows(employees);
  }, [employees]);

  //Initialize the other local states needed for dropdown/searchbar/sorting/pagination
  const [maxRows, setMaxRows] = useState(10);
  const [searchWord, setSearchWord] = useState([]);
  const [sort, setSort] = useState({ order: "up", type: "lastname" });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRows = useMemo(
    () => filterRows(rows, searchWord),
    [rows, searchWord]
  );
  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );
  const calculatedRows = paginateRows(sortedRows, currentPage, maxRows);
  const totalRows = filteredRows.length;
  const totalPages = Math.ceil(totalRows / maxRows);

  //Handle search feature => update the searchword local state & set the currentPage to the first page
  const handleSearch = (e) => {
    if (e.target.value.length === 0) {
      setSearchWord([]);
    } else {
      setSearchWord(e.target.value.toLowerCase());
    }
    setCurrentPage(1);
  };

  //Handle sort feature => update the sort local state & set the currentPage to the first page
  const handleSortColumn = (column) => {
    setSort((sort) => ({
      order: sort.order === "up" && sort.type === column ? "down" : "up",
      type: column,
    }));
    setCurrentPage(1);
  };

  //Handle limitation entries feature => update the maxRows local state & set the currentPage to the first page
  const handleFilter = (e) => {
    setMaxRows(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <ContainerTable>
      <h1>{tableTitle}</h1>
      <CustomTableHeader onFilter={handleFilter} onSearch={handleSearch} />
      <CustomTableBody
        columns={columns}
        onSort={handleSortColumn}
        sort={sort}
        calculatedRows={calculatedRows}
        searchWord={searchWord}
      />
      <CustomTableFooter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxRows={maxRows}
        totalRows={totalRows}
        totalPages={totalPages}
      />
    </ContainerTable>
  );
};

const ContainerTable = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2em;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;
