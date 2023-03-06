
import React from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import Oidc from 'oidc-client'
import { redirect } from "react-router-dom";
import AuthService from "../../utils/authService"


 const register = () => {


const login=()=> {
    const a=new AuthService()
    a.createSigninRequest()
}
   
return(<div ><button onClick={login}> Login
    </button></div>)

 }
export default register