// Add bellow trusted domains, access tokens will automatically injected to be send to
// trusted domain can also be a path like https://www.myapi.com/users,
// then all subroute like https://www.myapi.com/useers/1 will be authorized to send access_token to.

// Domains used by OIDC server must be also declared here
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const trustedDomains = {
    default: ['https://sts-lle.atsol.com','https://fs-tnr-tps-dev-api.azurewebsites.net']
};


// config_classics: ['https://demo.duendesoftware.com'],
// config_without_silent_logine: ['https://demo.duendesoftware.com'],
// config_without_refresh_tokene: ['https://demo.duendesoftware.com'],
// config_without_refresh_token_silent_logine: ['https://demo.duendesoftware.com'],
// config_googlee: ['https://oauth2.googleapis.com', 'https://openidconnect.googleapis.com'],
// config_with_hashe: ['https://demo.duendesoftware.com'],

