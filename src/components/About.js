
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }

componentDidMount() {
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About us</h1>
        <h2>This is Namaste React course.</h2>
        {/* <User name={"Deepak Kumar (function)"}/> */}

        <UserClass name={"Deepak Kumar (class)"} location={"Bangalore (class)"}/>
      </div>
    );
  }
}




// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h2>This is Namaste React course.</h2>
//       {/* <User name={"Deepak Kumar (function)"}/> */}

//       <UserClass name={"Deepak Kumar (class)"} location={"Bangalore (class)"}/>
//     </div>
//   );
// };
export default About;