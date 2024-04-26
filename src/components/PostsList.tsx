import { ChangeEvent, useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostList() {
  const [enteredBody, setEnteredBody] = useState<string>("");
  const [enteredAuthor, setEnteredAuthor] = useState<string>("");

  function bodyChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostList;
