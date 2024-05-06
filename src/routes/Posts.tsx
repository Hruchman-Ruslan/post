import { Outlet } from "react-router-dom";

import PostList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}
export default Posts;
