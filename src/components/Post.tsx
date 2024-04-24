import classes from "./Post.module.css";

interface IPost {
  author: string;
  body: string;
}

function Post({ author, body }: IPost) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
}

export default Post;
