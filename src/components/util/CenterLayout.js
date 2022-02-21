import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
`;

export default function CenterLayout({ children }) {
  return <Container>{children}</Container>;
}
