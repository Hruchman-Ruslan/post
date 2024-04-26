import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}
export default App;
