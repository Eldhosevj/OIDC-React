import React, {Component} from "react";
import { AuthProvider } from "./providers/AuthProvider";
import  {router} from "./routes/Routes";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 class App extends Component {
    render() {
        return (
            <AuthProvider>
                   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
            </AuthProvider>
        );
    }
  }
  export default App