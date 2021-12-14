import { useState } from "react/cjs/react.development";
import Account from "./components/Account";
import Img from "./components/Img";
import Int from "./components/Int";
import Post from "./components/Post";
import Profile from "./components/Profile";

function App() {
  const card_container = {
    width: "700px",
    height: "700px",
    margin: "auto",
    display: "flex",
    border: "1px solid",
  };

  const content_container = {
    width: "600px",
  };

  const [isEdit, setIsEdit] = useState("");
  const [post, setPost] = useState("Post something here");
  const [text, setText] = useState("");

  return (
    <div style={card_container}>
      <Profile />
      <div style={content_container}>
        <Account
          name="เป็นลก@609_exe_555"
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          post={post}
          setPost={setPost}
          text={text}
          setText={setText}
        />
        <Post
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          post={post}
          setPost={setPost}
          text={text}
          setText={setText}
        />
        <Img />
        <Int />
      </div>
    </div>
  );
}

export default App;
