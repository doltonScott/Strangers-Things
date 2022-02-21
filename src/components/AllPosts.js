import React from "react";
import Post from "./Post";
import { usePosts } from "../custom-hooks";

export default function AllPosts() {
  const { posts } = usePosts();
  return posts.map((post) => <Post key={post._id} post={post} />);
}
