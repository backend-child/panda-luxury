import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul>
          <ul className="navbarListItems">
            <li className="navbarListItem" onClick={() => navigate("/")}>
              <ExploreIcon
                fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
                width="36px"
                height="36px"
              />
              <p
                className={
                  pathMatchRoute("/")
                    ? " navbarListItemNameActiv "
                    : "navbarListItemName"
                }
              >
                Explore
              </p>
            </li>
            <li className="navbarListItem" onClick={() => navigate("/offers")}>
              <OfferIcon
                fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f"}
                width="36px"
                height="36px"
              />
              <p
                className={
                  pathMatchRoute("/offers")
                    ? " navbarListItemNameActiv "
                    : "navbarListItemName"
                }
              >
                Offers
              </p>
            </li>
            <li className="navbarListItem" onClick={() => navigate("/profile")}>
              <PersonOutlineIcon
                fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
                width="36px"
                height="36px"
              />
              <p
                className={
                  pathMatchRoute("/profile")
                    ? " navbarListItemNameActiv "
                    : "navbarListItemName"
                }
              >
                Profile
              </p>
            </li>
          </ul>
        </ul>
      </nav>
    </footer>
  );
};

export default NavBar;
