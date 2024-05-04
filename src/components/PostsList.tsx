import { useEffect, useState } from "react";

const { VITE_API_URL } = import.meta.env;

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

export interface IPost {
  body: string;
  author: string;
}

interface IPostList {
  isPosting: boolean;
  onStopPosting(): void;
}

function PostList({ isPosting, onStopPosting }: IPostList) {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(`${VITE_API_URL}/posts`);
      const resData = await response.json();
      setPosts(resData);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData: IPost) {
    fetch(`${VITE_API_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
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
