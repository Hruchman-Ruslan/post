import { ChangeEvent } from "react";

import classes from "./NewPost.module.css";

interface INewPost {
  onBodyChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCancel(): void;
}

function NewPost({ onBodyChange, onAuthorChange, onCancel }: INewPost) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
