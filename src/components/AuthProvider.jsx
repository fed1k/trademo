"use client";

import { checkUserByToken } from "@/utils/firebase_utils";
import { redirect, useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  // Authentication state
  const [user, setUser] = useState(null);

  const updateSeverUser = async (token) => {
    const response = await checkUserByToken(token);
    if (response) {
      setUser(response)
    }
  }

  const router = useRouter()
  useEffect(() => {
    // Check if there's a logged-in user (e.g., from localStorage or an API)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      updateSeverUser(storedUser.token).then((res) => {
        router.push("/home")
      })
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
    redirect("/home")
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user data from localStorage
    redirect("/login")
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
