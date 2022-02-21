import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignupOrLoginBtn = styled(Link)`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    font-size: 22px;
    border-radius: 5px;
    background-color: black;
    color: white;
    width: 220px;
    margin-top: 1em;
  }
  &:last-child {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
