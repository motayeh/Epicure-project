import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import hamburber from "../../assets/hamburber.svg";
import account from "../../assets/account.svg";
import activeBag from "../../assets/activeBag.svg";
import cart from "../../assets/cart.svg";
import logo from "../../assets/logo.svg";
import x from "../../assets/x.svg";
import search from "../../assets/search.svg";
const Layout = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="hamburger">
            <img src={hamburber} alt="" />
            <div className="upper-hamburger">
              <div>
                <Link to="/Homepage_resturant_all">Resturants</Link>
              </div>
              <div>
                <Link to="/Mobile/Chefs/All">Chefs</Link>
              </div>
            </div>
            <div className="lower-hamburger">
              {/* foter here */}
              <div>Contact Us</div>
              <div>Terms Of Use</div>
              <div>Privacy Policy</div>
            </div>
          </div>
          <div className="middleBar">
            <img src={logo} alt="" />
          </div>
          <div className="rightBar">
            <div className="itemsMove">
              <img src={search} alt="" id="1" />
              <img src={account} alt="" id="2" />
              <img src={cart} alt="" id="3" />
            </div>
          </div>
        </div>
      </header>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
};
export default Layout;
