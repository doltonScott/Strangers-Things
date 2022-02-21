import React from "react";
import { useMe } from "../custom-hooks";
import { CardContainer, ViewMyContent } from "./styled";
import { CenterLayout } from "./util";

export default function Me() {
  const { username, buttons } = useMe();

  if (!username) return null;

  return (
    <CenterLayout>
      <h2>Welcome, {username}</h2>
      <div>Here's what's new</div>
      <br />

      {buttons.map(({ icon, content, to, type, active }, idx) => (
        <CardContainer key={idx} active={active}>
          <i className="material-icons-outlined">{icon}</i>
          <div>{content}</div>
          <ViewMyContent to={to}>View {type}</ViewMyContent>
        </CardContainer>
      ))}
    </CenterLayout>
  );
}
