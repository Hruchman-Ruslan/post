import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import NewPost from "./components/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";

import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <App /> },
        { path: "create-post", element: <NewPost /> },
      ],
    },
  ],
  {
    basename: "/post/",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
