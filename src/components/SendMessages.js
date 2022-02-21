import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SendMessageContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  color: blue;
`;

export default function SendMessage({ title, postId }) {
  return (
    <SendMessageContainer to={`/me/messages/${postId}?title=${title}`}>
      Message this user
    </SendMessageContainer>
  );
}
