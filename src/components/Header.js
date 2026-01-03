import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {

let [buttonText, setButtonText] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          crossOrigin="true"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={()=>{
                buttonText == "Login" ? setButtonText("Logout") : setButtonText("Login")
            }}>{buttonText}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;