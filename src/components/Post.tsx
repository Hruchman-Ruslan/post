import classes from "./Post.module.css";

interface IPost {
  author: string;
  body: string;
}

function Post({ author, body }: IPost) {
  return (
    <li className={classes.post} key={author}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}

export default Post;
