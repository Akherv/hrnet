import { useState } from "react";
import styled from "styled-components";

export const SortIcon = ({ handleType }) => {
  const [typeElt, setTypeElt] = useState(true);

  return (
    <IconContainer
      onClick={() => {
        setTypeElt(!typeElt);
        handleType(!typeElt);
      }}
    >
      {typeElt ? "▼" : "▲"}
    </IconContainer>
  );
};
export default SortIcon;

const IconContainer = styled.div``;
