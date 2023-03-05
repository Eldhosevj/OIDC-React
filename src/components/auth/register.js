
import React from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import Oidc from 'oidc-client'
import { redirect } from "react-router-dom";
// const configuration = {
//   client_id: 'interactive.public.short',
//   redirect_uri: window.location.origin + '/authentication/callback',
//   silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
//   scope: 'openid profile email api offline_access',
//   authority: 'https://demo.duendesoftware.com',
//   service_worker_relative_url:'/OidcServiceWorker.js',
//   service_worker_only:true,
// };
var settings = {
    authority: 'https://demo.duendesoftware.com',
    metadata: {
      issuer: 'demo.duendesoftware.com',
      authorization_endpoint: 'https://demo.duendesoftware.com/Account/Login',
      userinfo_endpoint: 'https://demo.duendesoftware.com/users/userinfo',
      jwks_uri: "https://demo.duendesoftware.com/connect/token"
    },
    client_id: 'interactive.public.short',
    redirect_uri: 'http://localhost:59984/callback',
    post_logout_redirect_uri: 'http://localhost:59984/',
    response_type: 'id_token token',
    scope: 'openid profile email api offline_access',
    filterProtocolClaims: true,
    loadUserInfo: true
};
 const register = () => {

    const client = new Oidc.OidcClient(settings)

const login=()=> {
   const url =`https://demo.duendesoftware.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fredirect_uri%3Dhttp%253A%252F%252Flocalhost%253A59984%252Fauthentication%252Fcallback%26client_id%3Dinteractive.public.short%26response_type%3Dcode%26state%3DOwTGgdsYTn%26scope%3Dopenid%2520profile%2520email%2520api%2520offline_access%26nonce%3D1KHwqZhmzSDj%26code_challenge%3DVrmev3_D4FL4c7dVI5FNUKQ-vtTrRrid-5lv_GgNbnw%26code_challenge_method%3DS256`
   window.location.replace(url);
    // client.createSigninRequest({ data: { bar: 15 } }).then(function(req) {
    //     console.debug("login request", req, "<a href='" + req.url + "'>login</a>");
    //     window.location = req.url;
    // }).catch(function(err) {
    //     console.debug(err);
    // });
}
   
return(<div ><button onClick={login}> Login
    </button></div>)

 }
export default register