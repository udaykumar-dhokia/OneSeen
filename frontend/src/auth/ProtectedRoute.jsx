import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/loading/Loading";
import axios from "axios";

const ProtectedRoute = () => {
  const { isLoading, isAuthenticated, user, login } = useKindeAuth();

  const checkUsernameInDB = async (username) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/auth/check-username/${username}`
      );
      return response.data.message === "User already exists";
      console.log(response.data.message);
    } catch (error) {
      console.error("Error checking username:", error);
      console.error(error.message);
      return false;
    }
  };

  useEffect(() => {
    const registerUser = async () => {
      if (isAuthenticated) {
        const exists = await checkUsernameInDB(user.username);
        if (!exists) {
          try {
            await axios.post("http://localhost:5000/api/auth/register", {
              username: user.id,
              email: user.email,
            });
          } catch (err) {
            console.log(err);
          }
        }
      }
    };

    registerUser();
  }, [isAuthenticated]); // Only runs when authentication status changes

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
