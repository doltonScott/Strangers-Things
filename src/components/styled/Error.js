import styled from "styled-components";

export const Error = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em;
    border: 2px solid red;
    padding: 1em;
    font-size: 14px;
    border-radius: 5px;
    width: 220px;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: italic;
    text-align: center;
  }
  & > div:last-child {
    margin-top: 1em;
  }
  & > div i {
    color: red;
    margin-right: 0.5em;
  }
`;
