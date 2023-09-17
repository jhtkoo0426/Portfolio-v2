import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";


const Layout = () => {
    return (
      <div className="app-container">
        <Outlet/>
      </div>
    );
};

export default Layout;