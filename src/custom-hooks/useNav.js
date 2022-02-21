import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router";
import { STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY } from "../../constants";

const loggedOutLinks = [
  {
    name: "Home",
    icon: "home",
    to: "/home",
  },
  {
    name: "Login",
    icon: "login",
    to: "/login",
  },
  {
    name: "Signup",
    icon: "check_box",
    to: "/signup",
  },
];

const loggedInLinks = [
  {
    name: "Home",
    icon: "home",
    to: "/home",
  },
  {
    name: "Logout",
    icon: "logout",
    // omit to prop to suppress activeClass styling
  },
];

export function useNav() {
  const { isLoggedIn, updateAuthStatus } = useContext(AuthContext);
  const history = useHistory();
  const navLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  const logout = () => {
    localStorage.removeItem(STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY);
    updateAuthStatus();
    history.push("/home");
  };

  const linkProps = (name, to) => ({
    activeClassName: to ? "active" : null, // suppress logout link activeClass styling
    to: name === "Logout" ? "/home" : to,
    onClick: name === "Logout" ? logout : null,
  });

  return { linkProps, navLinks };
}
