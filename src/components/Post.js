import { useState } from "react";

function Post(props) {
  const post_container = {
    border: "1px solid ",
    height: "200px",
    padding: "0 10px",
  };

  const post_input = {
    width: "100%",
    height: "180px",
  };

  const [post, setPost] = useState("Post something here");
  const [edit, setEdit] = useState("");
  const [text, setText] = useState("");

  const editPost = "";

  const handleChangeText = (event) => {
    return setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEdit(text);
    if (text !== "") {
      setPost(text);
      props.setToggle(!props.toggle);
    }
  };

  return (
    <div style={post_container}>
      {props.isEdit ? (
        <p>{post}</p>
      ) : props.toggle ? (
        <p>{post}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input style={post_input} value={text} onChange={handleChangeText} />
        </form>
      )}
    </div>
  );
}

export default Post;
