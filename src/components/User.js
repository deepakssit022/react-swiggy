const User = ({name}) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
        <h3>Contact: 9876543210</h3>
    </div>
  );
};
export default User;