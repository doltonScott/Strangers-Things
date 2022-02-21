import React from "react";
import { useHistory } from "react-router-dom";
import { Form, FormField, LabelAndCheckbox } from "./styled";
import { CenterLayout } from "./util";
import { useEditOrCreatePost } from "../custom-hooks";

export default function EditOrCreatePost({ selectedPost, cancel }) {
  const { form, handleSubmit, handleChange, isLoggedIn } =
    useEditOrCreatePost(selectedPost);
  const history = useHistory();

  if (!isLoggedIn) {
    console.log("user not authenticated!");
    history.push("/home");
  }

  return (
    <CenterLayout>
      <h2>{selectedPost._id ? "Edit Post" : "New Post"}</h2>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Description</label>
          <textarea
            style={{ borderRadius: "5px" }}
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
          />
        </FormField>

        <LabelAndCheckbox>
          <label>Will Deliver</label>
          <input
            type="checkbox"
            name="willDeliver"
            onChange={handleChange}
            checked={form.willDeliver}
          />
        </LabelAndCheckbox>

        <input
          type="submit"
          value={selectedPost._id ? "Edit Post" : "Create Post"}
        />
        <button
          type="button"
          onClick={
            cancel
              ? cancel
              : () => {
                  history.push("/posts");
                }
          }
        >
          Cancel
        </button>
      </Form>
    </CenterLayout>
  );
}
