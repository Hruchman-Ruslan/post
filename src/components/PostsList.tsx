import { useEffect, useState } from "react";

const { VITE_API_URL } = import.meta.env;

import Post from "./Post";

import classes from "./PostsList.module.css";

export interface IPost {
  body: string;
  author: string;
}

function PostList() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsFetching(true);
        const response = await fetch(`${VITE_API_URL}/posts`);
        const resData = await response.json();
        setPosts(resData);
        setIsFetching(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

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
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(({ body, author }) => (
            <Post key={Math.random().toString()} body={body} author={author} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostList;
