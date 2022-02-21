import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CenterLayout } from "./util";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

const MessageContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 1em;
    border-bottom: 1px solid lightgrey;
  }
  & .smallText {
    font-size: 12px;
    line-height: 1.4em;
  }
`;

export default function MyMessages() {
  const { me } = useContext(AuthContext);
  const { messages } = me || {};

  if (!messages) return null;

  const received = messages.filter(
    (message) => message.fromUser.username !== me.username
  );
  const sent = messages.filter(
    (message) => message.fromUser.username === me.username
  );

  return (
    <CenterLayout>
      <Link to="/me">
        <h3>Back</h3>
      </Link>

      <h2>My Messages</h2>

      {received.map(({ content, post, fromUser }, idx) => (
        <MessageContainer key={idx}>
          <div className="Text">Post ID: {post._id}</div>
          <div className="Text">Title: {post.title}</div>
          <div className="Text">From: {fromUser.username}</div>
          <p>{content}</p>
        </MessageContainer>
      ))}
    </CenterLayout>
  );
}
