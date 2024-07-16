import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Sidebar.css"
import axios from "axios";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const {
    isLoggedIn,
    setIsLoggedIn,
    userDetails,
    setUserDetails,
    isAdmin,
    setIsAdmin,
  } = useAuth();

  const toggleSidebar = (ev) => {
    ev.preventDefault();
    setSidebar(!sidebar);
  };

  const handleLogout = (ev) => {
    ev.preventDefault();
    //api call to backend and if successfull setUserDetails to empty object and setIsLogged in to false

    axios.post(
      import.meta.env.VITE_ENV === "development"
        ? import.meta.env.VITE_API_DEV + "/logout"
        : import.meta.env.VITE_API_PROD + "/logout",
      {},
      { withCredentials: true }
    ).then((response) => {

      if ( response.status === 200 ) {

        setIsLoggedIn(false);
        setUserDetails({});
        if (isAdmin) { setIsAdmin(false)};

      }

    }).catch((error) => {

      console.log(error , "error happened while logging out \n");

    });
  }

  return (
    <div id="Sidebar-Super-Main">
      <button
        id="Hamburger-Button"
        onClick={(ev) => toggleSidebar(ev)}
       style={{backgroundColor: "white"}}
      >
        <MenuIcon ></MenuIcon>
      </button>
      {sidebar && (
        <div id="Sidebar-Main">
          <div>
            {" "}
            <Link to="/allUploads">
              {" "}
              All Uploaded Pdfs <PictureAsPdfIcon></PictureAsPdfIcon>{" "}
            </Link>{" "}
          </div>
          {isAdmin && (
            <div>
              {" "}
              <Link to="/adminDashboard">
                {" "}
                Dashboard
              </Link>{" "}
            </div>
          )}

          <div>
            <button id="Logout-Button" onClick={(ev) => handleLogout(ev)}>
              {" "}
              Logout <LogoutIcon></LogoutIcon>{" "}
            </button>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
