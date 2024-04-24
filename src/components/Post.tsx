const names = ["Ruslan", "Anton"];

function Post() {
  const choseName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <>
      <p>{choseName}</p>
      <p>React.js is awesome!</p>
    </>
  );
}

export default Post;
