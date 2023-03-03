export const IDENTITY_CONFIG = {
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

export const METADATA_OIDC = {
    issuer: "https://identityserver",
    jwks_uri: "https://sts-lle.atsol.com" + "/.well-known/openid-configuration/jwks",
    authorization_endpoint: "https://sts-lle.atsol.com" + "/connect/authorize",
    token_endpoint: "https://sts-lle.atsol.com" + "/connect/token",
    userinfo_endpoint:"https://sts-lle.atsol.com" + "/connect/userinfo",
    end_session_endpoint: "https://sts-lle.atsol.com" + "/connect/endsession",
    check_session_iframe:"https://sts-lle.atsol.com" + "/connect/checksession",
    revocation_endpoint: "https://sts-lle.atsol.com" + "/connect/revocation",
    introspection_endpoint:"https://sts-lle.atsol.com" + "/connect/introspect"
};
