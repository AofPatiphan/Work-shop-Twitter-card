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

  const [isEdit, setIsEdit] = useState(true);
  const [toggle, setToggle] = useState(true);

  return (
    <div style={card_container}>
      <Profile />
      <div style={content_container}>
        <Account name="เป็นลก@609_exe_555" setIsEdit={setIsEdit} />
        <Post
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Img />
        <Int />
      </div>
    </div>
  );
}

export default App;
