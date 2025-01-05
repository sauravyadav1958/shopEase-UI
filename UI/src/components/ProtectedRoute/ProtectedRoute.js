import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isTokenValid } from '../../utils/jwt-helper';

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    // TODO removed ! for to handle oauth login issue, will fix it later
    if(isTokenValid()){
        navigate("/v1/login")
    }
  },[navigate]);
  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoute