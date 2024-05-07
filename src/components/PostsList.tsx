import { useLoaderData } from "react-router-dom";

import Post from "./Post";

import classes from "./PostsList.module.css";

export interface IPost {
  body: string;
  author: string;
}

function PostList() {
  const posts = useLoaderData() as IPost[];

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(({ body, author }) => (
            <Post key={Math.random().toString()} body={body} author={author} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
