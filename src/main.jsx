import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Trynow from "./components/Trynow.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/trynow",
    element: <Trynow />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={
        "465092147184-8pvrc42qr1edmc6208i626ukeqin0agh.apps.googleusercontent.com"
      }
    >
    <Provider store={appStore}>
      <RouterProvider router={router} />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
