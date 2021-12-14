function Profile() {
  const profile_container = {
    width: "100px",
  };

  const profile_pic_container = {
    marginTop: "10px",
  };

  const profile_image = {
    display: "block",
    borderRadius: "50%",
    margin: "auto",
  };
  return (
    <div style={profile_container}>
      <div style={profile_pic_container}>
        <img src="https://picsum.photos/id/1005/80/80" style={profile_image} />
      </div>
    </div>
  );
}

export default Profile;
