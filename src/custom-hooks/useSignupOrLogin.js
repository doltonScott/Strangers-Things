import { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  BASE_URL,
  STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY,
} from "../../constants";
import { AuthContext } from "../context/AuthContext";

export function useSignupOrLogin() {
  const { updateAuthStatus } = useContext(AuthContext);
  const history = useHistory();
  const { pathname } = useLocation();
  const signupOrLogin = pathname.slice(1);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch(
        `${BASE_URL}/users/${
          signupOrLogin === "signup" ? "register" : "login"
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: form }),
        }
      );

      const { success, error, data } = await response.json();

      if (success) {
        setError(null);
        localStorage.setItem(
          STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY,
          data.token
        );
        updateAuthStatus();
        history.push("/posts");
      } else {
        setError(error);
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  const formFields = [
    {
      type: "text",
      name: "username",
      label: signupOrLogin === "signup" ? "Choose username" : "Username",
      value: form.username,
    },
    {
      type: "password",
      name: "password",
      label: signupOrLogin === "signup" ? "Choose password" : "Password",
      value: form.password,
    },
  ];

  return {
    h1: signupOrLogin === "signup" ? "Register Account" : "Login",
    error,
    handleSubmit,
    handleChange,
    formFields,
  };
}
