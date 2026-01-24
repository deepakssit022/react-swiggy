import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" crossOrigin="true" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4"> 
          <li className="px-4 font-bold">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="about">About</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">Cart</li>
          <li className="px-4 font-bold">
            <button
              className="login-btn"
              onClick={() => {
                buttonText == "Login"
                  ? setButtonText("Logout")
                  : setButtonText("Login");
              }}
            >
              {buttonText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
