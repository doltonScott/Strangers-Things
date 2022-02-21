import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const loggedInBtns = [
  { name: "View Posts", to: "/posts" },
  { name: "My Stuff", to: "/me" },
];

const loggedOutBtns = [
  { name: "Signup", to: "/signup" },
  { name: "Login", to: "/login" },
];

export function useHome() {
  const { isLoggedIn } = useContext(AuthContext);
  const buttons = isLoggedIn ? loggedInBtns : loggedOutBtns;
  return { buttons, isLoggedIn };
}
