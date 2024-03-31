import React from 'react'
import { Route, Navigate } from 'react-router-dom'

export default function protectedroute({children}) {
 const isauth = isauthjwt();
 return isauth ? children : <Navigate to='/signin' />
}
const isauthjwt = () => {
    const cookie = document.cookie;
  if (cookie.includes("jwt=")) {
    return true;
  } else {
    return false;
  }
}