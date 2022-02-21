import styled from "styled-components";

export const NavContainer = styled.nav`
  & {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.8em;
  }
  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    margin-left: 2em;
  }
  & > a:last-child {
    margin-right: 1em;
  }
  & > a.active {
    color: blue;
    font-weight: bold;
  }
`;
