import { Link } from "react-router-dom";
import styled from "styled-components";

export const Tab = (props) => {
  return (
    <TabElement>
      <TabLink to={props.tabLink}>
        <Icon src={props.tabIcon} alt={props.tabIconName} />
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
  align-items: baseline;
  &:hover > span {
    color: #f39237;
  }
`;

const TabElement = styled.li`
  margin-top: 2em;
  text-align: center;
`;

const Icon = styled.img`
  width: 15px;
  margin-right: 10px;
  color: #fff;
`;

const TabText = styled.span`
  color: #fff;
`;
