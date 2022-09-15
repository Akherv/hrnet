import { useState } from "react";
import styled, { css } from "styled-components";

export const CustomTablePagination = ({
  customColors,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const [page, setPage] = useState();

  const handleSubmitPage = (e) => {
    e.preventDefault();
    setCurrentPage(page);
  };
  return (
    <Pagination customColors>
      <LeftSide>
        <Button
          shortcut
          onClick={() => setCurrentPage(1)}
          disabled={currentPage <= 1}
        >
          <span>Start</span>
        </Button>
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <span>◄</span>
          <span>Previous</span>
        </Button>
      </LeftSide>

      <PageInfo>
        <span>{`page n°${
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
      </PageInfo>

      <RightSide>
        <Button
          onClick={(e) => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <span>Next</span> <span>►</span>
        </Button>
        <Button
          shortcut
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <span>End</span>
        </Button>
      </RightSide>
    </Pagination>
  );
};

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    margin: 0 0.2em;
    font-weight: 600;
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
    background-color: ${(props) => `${props.customColors}`};
    border-radius: 5px;
    & div {
      margin: 1em;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${(props) =>
    props.shortcut &&
    css`
      border: 1px solid grey;
      border-radius: 2px;
    `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LeftSide = styled(Container)``;
const PageInfo = styled(Container)``;
const RightSide = styled(Container)``;
