import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Avatar } from "@material-ui/core";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log("user ==> ", user);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="../Gift_logo.png" className="header__logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__options">
            <span className="header__lineOne">
              Hello {!user ? "Guest" : user.displayName}
            </span>
            <span className="header__lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__options">
            <span className="header__lineOne">Your Past</span>
            <span className="header__lineTwo">Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>

        <Link to="/profile">
          <div className="header__optionProfile">
            <Avatar src={user?.photoURL} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
