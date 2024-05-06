import { useLoaderData } from "react-router-dom";

import Post from "./Post";

import classes from "./PostsList.module.css";

export interface IPost {
  body: string;
  author: string;
}

function PostList() {
  const posts = useLoaderData() as IPost[];

  // function addPostHandler(postData: IPost) {
  //   fetch(`${VITE_API_URL}/posts`, {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

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
