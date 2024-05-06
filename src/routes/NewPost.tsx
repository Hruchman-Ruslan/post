import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import { IPost } from "../components/PostsList";

import Modal from "../components/Modal";

import classes from "./NewPost.module.css";

interface INewPost {
  onAddPost?(postData: IPost): void;
}

function NewPost({ onAddPost = () => {} }: INewPost) {
  const [enteredBody, setEnteredBody] = useState<string>("");
  const [enteredAuthor, setEnteredAuthor] = useState<string>("");

  function bodyChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(e.target.value);
  }

  function authorChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(e.target.value);
  }

  function submitHandler(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    onAddPost(postData);
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;