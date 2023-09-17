import { Outlet, Link, useLocation } from "react-router-dom";

import Anchor from "../components/Anchor";

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
            {/* Changes the displayed page name depending on which page the user is on. */}
            { page_location.pathname === "/" ? "data analyst / ML engineer" : page_location.pathname }
          </Link>
          <Link to={"/about"}>About Me</Link>

          {/* Social Links */}
          <Anchor href={"https://www.linkedin.com/in/koo-justin/"}>
            <FontAwesomeIcon icon={faLinkedinIn} className="topnav-icon"></FontAwesomeIcon>
          </Anchor>
          <Anchor href={"https://github.com/jhtkoo0426"}>
            <FontAwesomeIcon icon={faGithub} className="topnav-icon"></FontAwesomeIcon>
          </Anchor>
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