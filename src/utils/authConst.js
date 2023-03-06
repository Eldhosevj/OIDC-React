// export const IDENTITY_CONFIG = {
//     authority: "https://sts-lle.atsol.com", //(string): The URL of the OIDC provider.
//     client_id: "fstnr.tps", //(string): Your client application's identifier as registered with the OIDC provider.
//     redirect_uri: "http://localhost:59984/", //The URI of your client application to receive a response from the OIDC provider.
//     login: "https://sts-lle.atsol.com" + "/login",
//     automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
//     loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
//     silent_redirect_uri:window.location.origin + '/authentication/silent-callback', //(string): The URL for the page containing the code handling the silent renew.
//     post_logout_redirect_uri: window.location.origin + '/authentication/silent-callback', // (string): The OIDC post-logout redirect URI.
//     audience: "https://sts-lle.atsol.com", //is there a way to specific the audience when making the jwt
//     responseType: "id_token token", //(string, default: 'id_token'): The type of response desired from the OIDC provider.
//     grantType: "password",
//     scope: 'openid', //(string, default: 'openid'): The scope being requested from the OIDC provider.
//     webAuthResponseType: "code id_token"
// };

export const IDENTITY_CONFIG_DEMO = {
    client_id: 'interactive.public.short',
    redirect_uri: window.location.origin + '/signin-oidc',
    silent_redirect_uri: window.location.origin + '/authentications/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
    scope: 'openid profile email api offline_access',
    authority: 'https://demo.duendesoftware.com',
    post_logout_redirect_uri:window.location.origin + '/signout-odc',
    response_type:"code",
    metadata: {
        issuer: "https://demo.duendesoftware.com",
        jwks_uri: "https://demo.duendesoftware.com/.well-known/openid-configuration/jwks",
        authorization_endpoint: "https://demo.duendesoftware.com/connect/authorize",
        token_endpoint: "https://demo.duendesoftware.com/connect/token",
        userinfo_endpoint:"https://demo.duendesoftware.com/connect/userinfo",
        end_session_endpoint: "https://demo.duendesoftware.com/connect/endsession",
        check_session_iframe:"https://demo.duendesoftware.com/connect/checksession",
        revocation_endpoint: "https://demo.duendesoftware.com/connect/revocation",
        introspection_endpoint:"https://demo.duendesoftware.com/connect/introspect",
        "device_authorization_endpoint":"https://demo.duendesoftware.com/connect/deviceauthorization"
      }
    
  };
export const IDENTITY_CONFIG_VERA_MOBILITY={
    client_id: 'fstnr.tps',
    redirect_uri: window.location.origin + '/signin-oidc',
    silent_redirect_uri: window.location.origin + '/authentications/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
    scope: 'openid profile umid carsid netid fsamsapi fstnrapi fstnramsapi',
    authority: 'https://sts-lle.atsol.com',
    post_logout_redirect_uri:window.location.origin + '/signout-odc',
    response_type:'id_token token',
    metadata: {
        issuer: "https://sts-lle.atsol.com",
        jwks_uri: "https://sts-lle.atsol.com/.well-known/openid-configuration/jwks",
        authorization_endpoint: "https://sts-lle.atsol.com/connect/authorize",
        token_endpoint: "https://sts-lle.atsol.com/connect/token",
        userinfo_endpoint:"https://sts-lle.atsol.com/connect/userinfo",
        end_session_endpoint: "https://sts-lle.atsol.com/connect/endsession",
        check_session_iframe:"https://sts-lle.atsol.com/connect/checksession",
        revocation_endpoint: "https://sts-lle.atsol.com/connect/revocation",
        introspection_endpoint:"https://demo.duendesoftware.com/connect/introspect",
        "frontchannel_logout_supported":true,
        "frontchannel_logout_session_supported":true,
      }
}
export const METADATA_OIDC = {
    issuer: "https://identityserver",
    jwks_uri: "https://demo.duendesoftware.com" + "/.well-known/openid-configuration/jwks",
    authorization_endpoint: "https://demo.duendesoftware.com/" + "/connect/authorize",
    token_endpoint: "https://demo.duendesoftware.com" + "/connect/token",
    userinfo_endpoint:"https://demo.duendesoftware.com" + "/connect/userinfo",
    end_session_endpoint: "https://demo.duendesoftware.com" + "/connect/endsession",
    check_session_iframe:"https://demo.duendesoftware.com" + "/connect/checksession",
    revocation_endpoint: "https://demo.duendesoftware.com" + "/connect/revocation",
    introspection_endpoint:"https://demo.duendesoftware.com" + "/connect/introspect"
};

export const KEY_DEMO={"keys":[{"kty":"RSA","use":"sig","kid":"66682C848A3140685FC883FD7EA993CC","e":"AQAB","n":"pY-a5km28zOE-KS1UgYlWS9AT-4eYdxAlTVeGaSq21dhbB4L6tmlUiiV8s-Zv_L5Ng6rC1asmjEVtrKmFkYMoW4RbJC6HAzQbS7crGglyTJ39uDGJBpeQZCWYUljlIzp2VAJnPxG1-iyIDjZSOuGgvTxiphV4j2naU46RcT3IfC7CPkUZUtmqpbYNOHRli_oVirxGUMjHbq623qOCQUkUfMBLhKr0EjrZtcispSDzHqWktUO7K8Iy8D6VyttPIuzVkYx1GYiB0jCF1jgIDyEnH1E3r6S5ytao9KvoO6DGZTzFTJL2-i_uPco1DXfXFlVO9jKb5MHomO3NNrSDNRSnQ","alg":"RS256"}]}
export const KEY_VERRA_MOBILITY={"keys":[{"kty":"RSA","use":"sig","kid":"FE0F4E9F4D0B154FF406ADF0B07028A507EC545A","x5t":"_g9On00LFU_0Bq3wsHAopQfsVFo","e":"AQAB","n":"tCqPRb8nnsBzA9sZAlJ1DqkW24NI46XcsIcXpT-msIOep-I0koRayqt3ESi3MOMakOZWarJ0mpJD97b49PMfVeFCsbE-XumQq93Mddet05aN_w_ITug2qN52wo_MzvrNtY6kXkvDSU45KnoiX25HLjrCLgzp552npc_JJSidTzhIY8uW3v-342VkEWYTghwMdcA55CvnFK0YpSJfjYCx776CwOeTEunzUXfDG4hjaIZ5RF8bPkqXEXmD98hS1_v0ZftY1hr55LFqopw09byGW94jj2zzsqEQs_3RFfqTDPgUAbZlDRhKZyFGc5WnLEzIdvUfpHQ5wA1ycXpegInisw","x5c":["MIIC7jCCAdagAwIBAgIQE9mXkR9gFbpJzOQa+630jzANBgkqhkiG9w0BAQUFADAgMR4wHAYDVQQDExVFSU5BUjItREVTSy5hdHNvbC5jb20wHhcNMTYxMjEyMjMyNTI5WhcNMTcxMjEyMDAwMDAwWjAgMR4wHAYDVQQDExVFSU5BUjItREVTSy5hdHNvbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC0Ko9FvyeewHMD2xkCUnUOqRbbg0jjpdywhxelP6awg56n4jSShFrKq3cRKLcw4xqQ5lZqsnSakkP3tvj08x9V4UKxsT5e6ZCr3cx1163Tlo3/D8hO6Dao3nbCj8zO+s21jqReS8NJTjkqeiJfbkcuOsIuDOnnnaelz8klKJ1POEhjy5be/7fjZWQRZhOCHAx1wDnkK+cUrRilIl+NgLHvvoLA55MS6fNRd8MbiGNohnlEXxs+SpcReYP3yFLX+/Rl+1jWGvnksWqinDT1vIZb3iOPbPOyoRCz/dEV+pMM+BQBtmUNGEpnIUZzlacsTMh29R+kdDnADXJxel6AieKzAgMBAAGjJDAiMAsGA1UdDwQEAwIEMDATBgNVHSUEDDAKBggrBgEFBQcDATANBgkqhkiG9w0BAQUFAAOCAQEAb+tJJr/JejXHmmSQ9M2gxdvl/B12F44P15ZpejMk2FAqruiPI4czfWiJ7SDBUreZm4YFEHj6LNSbIm2ELb7LuA2UQ3biQjingQXYgDg3nKHBvh4zn3aT2gU6Mps/4tkAa7OkfeatOUW+ulQBfpRBFbVOwr99kz8OsC/h9yLzv2JDpWeAezTBDDEXLaUb30tqaim76WWRUXjxmwkxEe+fxw2vX6Tsy61D/UcoQr7MDN+R57fO2/qurnHYFl9wk7Qex98m9uXFdN50K0U4QdiHwRVR68JCZYGVqxCJf4827k0NrKjFNOxNOq59t1HzhccBYbK26S6q/W2IhkfSrwseUw=="]}]}
