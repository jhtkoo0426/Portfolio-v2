import { Outlet, Link } from "react-router-dom";
import Anchor from "../components/Anchor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";


const Layout = () => {
    return (
      /* Topnav + content + botnav wrapper for pages */
      <div className="app">
        <div className="cursor"></div>
        <nav className="topnav">
          <Link to="/">j.</Link>
          <div className="topnav-menu">
            <Anchor href={"https://www.linkedin.com/in/justin-koo-29bb831b2/"}>
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </Anchor>
            <Anchor href={"https://github.com/jhtkoo0426"}>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </Anchor>
          </div>
        </nav>  
        {/* Outlet: Component that contains the actual page content */}
        <div className="main">
          <Outlet/>
        </div>
        <nav className="botnav">
          <p>Made from scratch by myself with React.js</p>
          <p>Design inspiration taken from <a href="https://www.adriengervaix.com">Adrien Gervalx</a> and <a href="https://qaisar.design">Qaisar Ahmad</a></p>
        </nav>
      </div>
    );
};

export default Layout;