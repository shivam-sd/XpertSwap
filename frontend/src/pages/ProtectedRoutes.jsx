import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";

const ProtectedRoutes = (props) => {

  const {Component} = props;
  const navigate = useNavigate();


  useEffect(() => {
    let protect = localStorage.getItem("token");
    if(!protect){
      navigate("/login");
    }
  } , []);

  return (
    <div>
      <Component />
    </div>
  )
}

export default ProtectedRoutes
