import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "./Loader/Loader.jsx";

const AdminProtectedRoutes = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const url = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetchAuthStatus();
  }, [location.pathname]);

  const fetchAuthStatus = async () => {
    try {
      const { data } = await axios.get(`${url}/api/v1/admin-auth`, {
        withCredentials: true,
      });
      
      setAuth(data?.data?.auth);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAuth(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return auth ? children : <Navigate to="/login"  state={{from:location}} />;
};

export default AdminProtectedRoutes;
