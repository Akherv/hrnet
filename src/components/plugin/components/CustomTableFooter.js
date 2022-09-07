import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

export const CustomTableFooter = ({
  currentPage,
  setCurrentPage,
  maxRows,
  totalRows,
  totalPages,
}) => {
  const [pagination, setPagination] = useState([]);
  const [paginationFiltered, setPaginationFitered] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < totalPages; i++) {
      arr.push(i + 1);
    }
    setPagination(arr);
  }, [totalPages]);

  const filterPagination = useMemo(() => {
    let arr = [];
    [...pagination].map((page, idx) => {
      return page >= currentPage - 3 && page <= currentPage + 3
        ? arr.push(page)
        : null;
    });
    setPaginationFitered(arr);
  }, [pagination, currentPage]);

  return (
    <Footer>
      <InfoPagination>
        Showing
        <span>
          {totalRows === maxRows * currentPage - maxRows + 1
            ? totalRows
            : maxRows * currentPage - maxRows + 1}
        </span>
        to
        <span>
          {totalRows < maxRows * currentPage
            ? totalRows
            : maxRows * currentPage}
        </span>
        of
        <span>{totalRows}</span>
        entries
      </InfoPagination>

      <Pagination>
        <div>
          <button
            className="shorthand"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            <span>Start</span>
          </button>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ◄<span>Previous</span>
          </button>
        </div>
        <ul>
          {paginationFiltered.map((page, idx) => {
            return (
              <Pages key={idx} onClick={(e) => setCurrentPage(page)}>
                <span className={page === currentPage ? "activePage" : ""}>
                  {page}
                </span>
              </Pages>
            );
          })}
        </ul>
        <div>
          <button
            onClick={(e) => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>►
          </button>
          <button
            className="shorthand"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <span>End</span>
          </button>
        </div>
      </Pagination>
    </Footer>
  );
};

const Footer = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InfoPagination = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & span {
    margin: 1em 0.2em;
    font-weight: 600;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & ul {
    margin: 1em;
    display: flex;
  }
  & span {
    margin: 0 0.2em;
  }

  & button:not(.shorthand) {
    border: none;
    background: none;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Pages = styled.li`
  display: flex;
  margin: 0 0.5em;
  cursor: pointer;

  & span {
    margin: 0 0.2em;
    font-weight: 600;
  }

  & .activePage {
    color: tomato;
  }
`;
