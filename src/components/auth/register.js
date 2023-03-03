
import React from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import Oidc from 'oidc-client'
 const IDENTITY_CONFIG = {
    authority: "https://sts-lle.atsol.com", //(string): The URL of the OIDC provider.
    client_id: "fstnr.tps", //(string): Your client application's identifier as registered with the OIDC provider.
    redirect_uri: "http://localhost:59984/", //The URI of your client application to receive a response from the OIDC provider.
    login: "https://sts-lle.atsol.com" + "/login",
    automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
    loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
    silent_redirect_uri:window.location.origin + '/authentication/silent-callback', //(string): The URL for the page containing the code handling the silent renew.
    post_logout_redirect_uri: window.location.origin + '/authentication/silent-callback', // (string): The OIDC post-logout redirect URI.
    audience: "https://sts-lle.atsol.com", //is there a way to specific the audience when making the jwt
    responseType: "id_token token", //(string, default: 'id_token'): The type of response desired from the OIDC provider.
    grantType: "password",
    scope: 'openid', //(string, default: 'openid'): The scope being requested from the OIDC provider.
    webAuthResponseType: "code id_token"
};
var settings = {
    authority: 'https://sts-lle.atsol.com',
    metadata: {
      issuer: 'sts-lle.atsol.com',
      authorization_endpoint: 'https://sts-lle.atsol.com/Account/Login',
      userinfo_endpoint: 'https://sts-lle.atsol.com/users/userinfo',
      jwks_uri: "https://sts-lle.atsol.com/connect/token"
    },
    client_id: 'fstnr.tps',
    redirect_uri: 'http://localhost:59984/callback',
    post_logout_redirect_uri: 'http://localhost:59984/',
    response_type: 'id_token token',
    scope: 'openid',
    filterProtocolClaims: true,
    loadUserInfo: true
};
 const register = () => {

    const client = new Oidc.OidcClient(settings)

const login=()=> {
    client.createSigninRequest({ data: { bar: 15 } }).then(function(req) {
        console.debug("login request", req, "<a href='" + req.url + "'>login</a>");
        window.location = req.url;
    }).catch(function(err) {
        console.debug(err);
    });
}
   
return(<div ><button onClick={login}> Login
    </button></div>)

 }
export default register