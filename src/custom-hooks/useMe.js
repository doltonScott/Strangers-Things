import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useMe() {
  const { me } = useContext(AuthContext);
  const { username, posts, messages } = me || {};

  if (!me._id) {
    return {};
  }

  const received = messages.filter(
    (message) => message.fromUser._id !== me._id
  );
  const activePosts = posts.filter((post) => post.active);

  const buttons = [
    {
      icon: activePosts.length ? "dynamic_feed" : "feed",
      content: `You have ${activePosts.length} active posts`,
      to: "/me/posts",
      type: "posts",
      active: activePosts.length,
    },
    {
      icon: received.length ? "upcoming" : "inbox",
      content: `There are ${received.length} new messages waiting`,
      to: "/me/messages",
      type: "messages",
      active: received.length,
    },
  ];

  return { username, posts, messages, buttons };
}
