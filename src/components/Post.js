import React from "react";
import { usePost } from "../custom-hooks";
import { PostContainer } from "./styled";
import { formatDate } from "../lib";
import SendMessage from "./SendMessage";

import styled from "styled-components";
const ActiveBadgeContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? "green" : "red")};
  color: white;
  padding: 0.5em;
  font-size: 12px;
  height: min-content;
`;

const ActiveBadge = ({ isActive, content }) => {
  return (
    <ActiveBadgeContainer isActive={isActive}>{content}</ActiveBadgeContainer>
  );
};

const DetailsContainer = styled.div`
  & {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 300px;
  }
  & > span:last-child {
    width: 100px;
    text-align: left;
  }
`;

export default function Post({ post }) {
  const { isLoggedIn } = usePost();

  const {
    location,
    willDeliver,
    messages,
    active,
    _id,
    author,
    title,
    description,
    price,
    createdAt,
    updatedAt,
    isAuthor,
  } = post || {};

  const details = [
    { copy: "Posted by:", value: author.username },
    { copy: "Date of listing:", value: formatDate(createdAt) },
    { copy: "Last updated:", value: formatDate(updatedAt) },
  ];

  return (
    <PostContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ActiveBadge isActive={active} content={active ? "Active" : "Sold"} />
        <h2 style={{ display: "inline-flex", paddingLeft: ".5em" }}>{title}</h2>
      </div>

      {details.map(({ copy, value }, idx) => (
        <DetailsContainer key={idx}>
          <span>{copy}</span>
          <span>{value}</span>
        </DetailsContainer>
      ))}

      <p>{description}</p>

      <div>Price: {price}</div>
      <div>Location: {location}</div>
      <div>Will deliver? {willDeliver ? "yes" : "no"}</div>

      <SendMessage title={title} postId={_id} />
    </PostContainer>
  );
}
