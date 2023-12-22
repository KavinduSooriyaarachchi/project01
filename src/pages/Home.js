import React from 'react'
import Header from '../components/Header'
import {Outlet, Link}  from "react-router-dom";

export default function() {
  return (

    <div>
      <Header/>
      <h1>Home Page</h1>
      <Link to = "/ForgetPw"> Forget Password </Link><br></br>
      <Link to = "/EditProfile"> Edit Profile </Link><br></br>
      <Link to = "/DeleteMembers"> Delete Members </Link>

    </div>

  )

}