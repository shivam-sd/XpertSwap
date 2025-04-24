import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const adminToken = localStorage.getItem("AdminToken");

    // Redirect only if both tokens are missing
    if (!userToken && !adminToken) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component />;
};

export default ProtectedRoutes;
