import { IDENTITY_CONFIG_DEMO, METADATA_OIDC,KEY_DEMO,KEY_VERRA_MOBILITY } from "./authConst";
import { UserManager, WebStorageStateStore, Log,OidcClient } from "oidc-client";
import Oidc from 'oidc-client'
const IDENITY_SERVER_POINTS_TO="DEMO"
//const IDENITY_SERVER_POINTS_TO="VERRA"

const IDENTITY_SERVER_CONFIGARATION=IDENITY_SERVER_POINTS_TO=="DEMO"?IDENTITY_CONFIG_DEMO:null
const KEY=IDENITY_SERVER_POINTS_TO=="DEMO"?KEY_DEMO:KEY_VERRA_MOBILITY
export default class AuthService {
    UserManager;

    constructor() {
        this.UserManager = new UserManager(
           {...IDENTITY_SERVER_CONFIGARATION,userStore: new WebStorageStateStore({ store: window.sessionStorage })}
           
        );
        this.client = new Oidc.OidcClient(IDENTITY_SERVER_CONFIGARATION);
        // Logger
        Log.logger = console;
        Log.level = Log.DEBUG;
        this.UserManager.events.addUserLoaded((user) => {
            if (window.location.href.indexOf("signin-oidc") !== -1) {
                this.navigateToScreen();
            }
        });
        this.UserManager.events.addSilentRenewError((e) => {
            console.log("silent renew error", e.message);
        });

        this.UserManager.events.addAccessTokenExpired(() => {
            console.log("token expired");
            this.signinSilent();
        });
    }

    signinRedirectCallback = () => {
        this.UserManager.signinRedirectCallback().then(() => {
alert("login successful")
const USER=this.getUser()
USER.then((res)=>{
    alert(JSON.stringify(res.profile
        ))
})
        }).catch((err)=>{
            alert(err)
        });
    };


    getUser = async () => {
        const user = await this.UserManager.getUser();
        if (!user) {
            return await this.UserManager.signinRedirectCallback();
        }
        return user;
    };

    parseJwt = (token) => {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        return JSON.parse(window.atob(base64));
    };


    signinRedirect = () => {
        localStorage.setItem("redirectUri", window.location.pathname);
        this.UserManager.signinRedirect({});
    };


    navigateToScreen = () => {
        window.location.replace("/en/dashboard");
    };


    isAuthenticated = () => {
        const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${process.env.REACT_APP_AUTH_URL}:${process.env.REACT_APP_IDENTITY_CLIENT_ID}`))

        return (!!oidcStorage && !!oidcStorage.access_token)
    };

    signinSilent = () => {
        this.UserManager.signinSilent()
            .then((user) => {
                console.log("signed in", user);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    signinSilentCallback = () => {
        this.UserManager.signinSilentCallback();
    };

    createSigninRequest = () => {
       // return this.UserManager.createSigninRequest();
    
       
       this.client.createSigninRequest(KEY).then(function(req) {
        console.debug("login request", req, "<a href='" + req.url + "'>login</a>");
        window.location = req.url;
    }).catch(function(err) {
        console.debug(err);
    });

    };

    logout = () => {
        this.UserManager.signoutRedirect({
            id_token_hint: localStorage.getItem("id_token")
        });
        this.UserManager.clearStaleState();
    };

    signoutRedirectCallback = () => {
        this.UserManager.signoutRedirectCallback().then(() => {
            localStorage.clear();
            window.location.replace(process.env.REACT_APP_PUBLIC_URL);
        });
        this.UserManager.clearStaleState();
    };
}

