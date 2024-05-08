import { useLoaderData } from "react-router-dom";

import { IPost } from "../types/post";

import Modal from "../components/Modal";

import classes from "./PostDetails.module.css";

function PostDetails() {
  const { author, body } = useLoaderData() as IPost;

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;
