interface IPost {
  author: string;
  body: string;
}

function Post({ author, body }: IPost) {
  return (
    <>
      <p>{author}</p>
      <p>{body}</p>
    </>
  );
}

export default Post;
