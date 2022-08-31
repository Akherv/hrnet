import { Link } from "react-router-dom";
import styled from "styled-components";

export const Tab = (props) => {
  return (
    <TabElement>
      <TabLink to={props.tabLink}>
        <Icon className={`fa ${props.tabIcon}`}></Icon>
        <TabText>{props.children}</TabText>
      </TabLink>
    </TabElement>
  );
};

const StyledLink = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  display: block;
  max-width: 100%;
`;

const TabLink = styled(StyledLink)`
  width: 100%;
  text-decoration: none;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  &:hover > i,
  &:hover > p {
    color: #ee6338;
  }
`;

const TabElement = styled.li`
  margin-top: 2em;
`;

const Icon = styled.i`
  margin-right: 10px;
  color: white;
  font-size: 20px;
  width: 40px;
`;

const TabText = styled.span`
  color: white;
`;
