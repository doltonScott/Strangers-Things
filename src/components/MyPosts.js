import React from "react";
import { Link } from "react-router-dom";
import { useMyPosts } from "../custom-hooks";
import { PostCardContainer, MyPostsSection } from "./styled";
import { CenterLayout } from "./util";
import { formatDate } from "../lib";
import EditOrCreatePost from "./CreatePost";

function PostCard({ post, toggleEdit, removePost, reactivatePost }) {
  const { title, updatedAt } = post;

  return (
    <PostCardContainer type={removePost ? "remove" : "reactivate"}>
      <div style={{ textAlign: "center" }}>
        <h4>{title}</h4>
        <span className="date">Last updated: {formatDate(updatedAt)}</span>
      </div>
      <div className="toggleEdit" onClick={toggleEdit}>
        Edit
      </div>
      <div className="modifyPost" onClick={removePost || reactivatePost}>
        {removePost ? "Remove" : "Reactivate"}
      </div>
    </PostCardContainer>
  );
}

export default function MyPosts() {
  const {
    posts,
    selectedPost,
    setSelectedPost,
    removePost,
    // reactivatePost,
  } = useMyPosts();

  if (!posts) return null;

  const activePosts = posts.filter((post) => post.active);
  // const closedPosts = posts.filter((post) => !post.active);

  return (
    <CenterLayout>
      {!selectedPost._id && (
        <Link to={"/me"}>
          <h3>Back</h3>
        </Link>
      )}

      {selectedPost._id ? (
        <EditOrCreatePost
          selectedPost={selectedPost}
          cancel={() => setSelectedPost({})}
        />
      ) : (
        <>
          <h2>My Posts</h2>

          <MyPostsSection>
            {/* if we showed closed posts we'd label this section */}
            {/* <label>Active</label> */}
            {!activePosts.length ? (
              <p style={{ fontSize: "12px" }}>(no active posts)</p>
            ) : (
              activePosts.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  toggleEdit={() => setSelectedPost(post)}
                  removePost={() => removePost(post._id)}
                />
              ))
            )}
          </MyPostsSection>
        </>
      )}
    </CenterLayout>
  );
}
