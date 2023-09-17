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
          <div className="home-button">
            <Link to={"/"}>
              <p className="j">j.</p>
              {/* Changes the displayed page name depending on which page the user is on. */}
              <p className="job-title">{ page_location.pathname === "/" ? "data analyst & ML engineer" : page_location.pathname }</p>
            </Link>
          </div>
          <div className="topnav-menu">
            <Link className="anchor underline" to={"/about"}>about</Link>
            <Link className="anchor underline" to={"/"}>contact</Link>
          </div>
        </nav>

        {/* Side navigation bar */}
        <nav className="sidenav-container">
          <ul>
            <li>
              <Anchor underline={true} href={"https://www.linkedin.com/in/koo-justin/"}>
                LinkedIn
              </Anchor>
            </li>
            <li>
              <Anchor underline={true} href={"https://github.com/jhtkoo0426"}>
                GitHub
              </Anchor>
            </li>
          </ul>
        </nav>

        {/* Container for the main content of the portfolio */}
        <div className="main-container">
          <Outlet/>
        </div>
        
        {/* Bottom navigation bar */}
        <nav className="botnav-container">
          Made with passion using React.js
        </nav>
      </div>
    );
};

export default Layout;