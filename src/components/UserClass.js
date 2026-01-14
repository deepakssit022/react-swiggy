import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            this.setState({
                count: count + 1
            })
        }}>Count Increase</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: 9876543210</h3>
      </div>
    );
  }
}

export default UserClass;
