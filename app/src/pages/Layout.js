import { Outlet, Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";



const Layout = () => {
    var page_location = useLocation();
    return (
      <div className="app-container">
        {/* Top navigation bar */}
        <nav className="topnav-container">
          <Link to={"/"}>
            <span>j.</span>
            {/* If the current page is "about", add a "back home" text (on hover) next to the 
            home button for better indication */}
            { page_location.pathname === "/about" ? <span>back home</span> : null }
          </Link>
          <Link to={"/about"}>About Me</Link>
        </nav>

        {/* Container for the main content of the portfolio */}
        <div className="main-container">
          <Outlet/>
        </div>
        
        {/* Bottom navigation bar */}
        <nav className="botnav-container">botnav</nav>
      </div>
    );
};

export default Layout;