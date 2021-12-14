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

  const handleChangeText = (event) => {
    props.setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.text !== "") {
      props.setPost(props.text);
      props.setIsEdit("");
    } else {
      props.setPost("Post something here");
      props.setIsEdit("");
    }
  };

  return (
    <div style={post_container}>
      {!props.isEdit ? (
        <p>{props.post}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            style={post_input}
            value={props.text}
            onChange={handleChangeText}
          />
        </form>
      )}
    </div>
  );
}

export default Post;
