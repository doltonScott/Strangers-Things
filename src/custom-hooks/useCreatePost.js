import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants";

export function useCreatePost(selectedPost) {
  const { isLoggedIn, token, updateMe } = useContext(AuthContext);
  const history = useHistory();

  const [form, setForm] = useState(
    selectedPost._id
      ? selectedPost
      : {
          location: "",
          willDeliver: false,
          title: "",
          description: "",
          price: "",
        }
  );

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    if (e.target.type === "checkbox" && e.target.checked) {
      setForm({ ...form, willDeliver: true });
      return;
    }

    if (e.target.type === "checkbox" && e.target.checked) {
      setForm({ ...form, willDeliver: false });
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };
}
