import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      userInfo: {},
    };
    console.log("Child - constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/deepakssit022");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Child - componentDidMount");
  }

  render() {
    const { name, location } = this.props;
    const { count, userInfo } = this.state;

    console.log("Child - render");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {userInfo.name}</h2>
        <h3>Location: {userInfo.location}</h3>
        <h3>Contact: 9876543210</h3>
      </div>
    );
  }
}

export default UserClass;
