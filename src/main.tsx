import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

const { VITE_API_URL } = import.meta.env;

import Posts from "./routes/Posts.tsx";
import NewPost from "./routes/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";

import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Posts />,
          loader: async () => fetch(`${VITE_API_URL}/posts`),
          children: [
            {
              path: "create-post",
              element: <NewPost />,
              action: async ({ request }) => {
                const formData = await request.formData();
                const postData = Object.fromEntries(formData);
                await fetch(`${VITE_API_URL}/posts`, {
                  method: "POST",
                  body: JSON.stringify(postData),
                  headers: {
                    "Content-Type": "application/json",
                  },
                });

                return redirect("/");
              },
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/post",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
