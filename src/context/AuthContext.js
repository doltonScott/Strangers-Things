import React, { useState, useEffect } from "react";
import {
  BASE_URL,
  STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY,
} from "../../constants";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [shouldCheckStatus, checkStatus] = useState(false);
  const [me, setMe] = useState({});
  const [meError, setMeError] = useState({});
  const [selectedPost, setSelectedPost] = useState({});

  const getMe = async (retrievedToken) => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${retrievedToken}`,
        },
      });
      const { success, error, data } = await response.json();

      if (success) {
        setMeError(null);
        setMe(data);
      } else {
        setMeError(error);
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  const updateAuthStatus = () => checkStatus(!shouldCheckStatus);

  const updateMe = () => getMe(token);

  useEffect(() => {
    const retrievedToken = localStorage.getItem(
      STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY
    );
    setToken(retrievedToken);
    if (retrievedToken) {
      getMe(retrievedToken);
    }
  }, [shouldCheckStatus]);

  const providerValue = {
    isLoggedIn: !!token,
    token,
    updateAuthStatus,
    me,
    meError,
    selectedPost,
    setSelectedPost,
    updateMe,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}
