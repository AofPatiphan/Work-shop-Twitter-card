function Account({ name, setIsEdit, isEdit, setText }) {
  const account_container = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    height: "40px",
  };
  const account_name = {
    fontSize: "16px",
    display: "inline-block",
  };

  const handleClick = () => {
    setIsEdit(!isEdit);
    setText("");
  };
  return (
    <div style={account_container}>
      <p style={account_name}>{name}</p>
      <button onClick={handleClick}>...</button>
    </div>
  );
}

export default Account;
