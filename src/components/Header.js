import { useState, useContext } from "react";
import Logo from "../assets/img/food-villa-logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2 " src={Logo} alt="Food Villa" />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   console.log("useEffect()");
  // });

  // console.log(useState());
  const isOnline = useOnline();

  const {user} = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2"><Link to="/contact">Contact</Link></li>
          <li className="px-2">Cart</li>
          <li className="px-2"><Link to="/instamart">Instamart</Link></li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => {setIsLoggedIn(false);}}>Logout</button>
      ) : (
        <button onClick={() => {setIsLoggedIn(true);}}>Login</button>
      )}
    </div>
  );
};

export default Header;
