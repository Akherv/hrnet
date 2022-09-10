import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";

export const CustomTablePagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const [pagination, setPagination] = useState([]);
  const [paginationFiltered, setPaginationFitered] = useState([]);
  const [page, setPage] = useState();

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

  const handleSubmitPage = () => {
    //e.preventDefault();
    console.log(page);
    setCurrentPage(page);
  };
  return (
    <Pagination>
      <div>
        <button
          className="shorthand"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage <= 1}
        >
          <span>Start</span>
        </button>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          ◄<span>Previous</span>
        </button>
      </div>

      {/* <ul>
        {paginationFiltered.map((page, idx) => {
          return (
            <Pages key={idx} onClick={(e) => setCurrentPage(page)}>
              <span className={page === currentPage ? "activePage" : ""}>
                {page}
              </span>
            </Pages>
          );
        })}
      </ul> */}
      <div className="pageInfoContainer">
        <span style={{ fontWeight: "600" }}>{`page n°${
          totalPages > 0 ? currentPage : 0
        } / ${totalPages}`}</span>
        <form onSubmit={handleSubmitPage}>
          <input
            type="number"
            min={1}
            max={totalPages}
            onChange={(e) => setPage(e.target.value)}
          />
        </form>
      </div>

      <div>
        <button
          onClick={(e) => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <span>Next</span>►
        </button>
        <button
          className="shorthand"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <span>End</span>
        </button>
      </div>
    </Pagination>
  );
};

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

  & .pageInfoContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & form input {
    width: 60px;
    margin: 0 0.2em;
  }
  @media screen and (max-width: 1320px) {
    width: 80%;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #b8cab3;
    border-radius: 5px;

    & div {
      margin: 1em;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

// const Pages = styled.li`
//   display: flex;
//   margin: 0 0.5em;
//   cursor: pointer;

//   & span {
//     margin: 0 0.2em;
//     font-weight: 600;
//   }

//   & .activePage {
//     color: tomato;
//   }
// `;
