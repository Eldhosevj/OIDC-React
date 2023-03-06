import * as React from "react";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Callback  from "../components/auth/callback";
import Logout  from "../components/auth/logout";
import  LogoutCallback  from "../components/auth/logoutCallback";
import { PrivateRoute } from "./privateRoute";
//import { Register } from "../components/auth/register";
import  SilentRenew  from "../components/auth/silentRenew";
import PublicPage from "../components/publicPage"
import PrivatePage from "../components/PrivatePage"
import Register from "../components/auth/register"


//  const Routeres = ()=>{
//     return(
//         <Router basename={"/"}>
//         <Route exact={true} path="/signin-oidc" component={Callback} />
//         <Route exact={true} path="/logout" component={Logout} />
//         <Route exact={true} path="/logout/callback" component={LogoutCallback} />
//         {/*<Route exact={true} path="/register" component={Register} />*/}
//         <Route exact={true} path="/silentrenew" component={SilentRenew} />
//         <PrivateRoute path="/dashboard" component={PrivatePage} />
//         <Route path="/" component={PublicPage} />
//     </Router>
//     )
//  };
  export const router = createBrowserRouter([
    {
      path: "/signin-oidc",
      element: <Callback />,
    },
    {
      path: "/",
      element: <Register />,
    },
    {
        path:"/logout",
        element: <Logout />,
      },
      {
        path: "/logout/callback",
        element: <LogoutCallback />,
      },
      {
        path: "/silentrenew",
        element: <SilentRenew />,
      },
      {
        path: "/en/dashboard",
        element: <PrivatePage />,
      },
      {
        path: "/homepage",
        element: <PublicPage />,
      }
  ]);