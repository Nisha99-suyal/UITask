import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";
import { FaClipboard } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
function VerticalNav() {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <div
      className="nav-container"
      style={{ width: window === false ? "20%" : 60 }}
    >
      <div className="burger" onClick={() => openClose()}>
        <RxHamburgerMenu />
      </div>
      <div className="nav-items-container">
        <ul
          className="nav_items"
          style={{ display: window === false ? "inline-block" : "none" }}
        >
          <li className="nav_item">
            <NavLink to="/overview">
              <RiLayoutMasonryFill /> Overview
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/lending">
              <BiCalendarEvent /> Lending
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/portfolio">
              <ImProfile /> portfolio
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/swap">
              <MdContacts /> Swap
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/claim">
              <FaClipboard /> Claim
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VerticalNav;
