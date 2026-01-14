
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h2>This is Namaste React course.</h2>
      {/* <User name={"Deepak Kumar (function)"}/> */}

      <UserClass name={"Deepak Kumar (class)"} location={"Bangalore (class)"}/>
    </div>
  );
};
export default About;