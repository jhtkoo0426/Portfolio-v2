import { Outlet, Link } from "react-router-dom";
import Anchor from "../components/Anchor";
import HugeTitle from "../components/HugeTitle";
import TwoColContainer from "../components/TwoColumnContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";


const Layout = () => {
    return (
      /* Topnav + content + botnav wrapper for pages */
      <div className="app-container">
        <div className="app-background">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="app">
          <div className="cursor"></div>
          <nav className="topnav-container">
            <Link to="/" className="home-icon">j.</Link>
            <div className="topnav-menu">
              <Anchor href={"https://www.linkedin.com/in/koo-justin/"}>
                <FontAwesomeIcon icon={faLinkedinIn} className="topnav-icon"></FontAwesomeIcon>
              </Anchor>
              <Anchor href={"https://github.com/jhtkoo0426"}>
                <FontAwesomeIcon icon={faGithub} className="topnav-icon"></FontAwesomeIcon>
              </Anchor>
              <Link to="about" className="topnav-link">About & Services</Link>
              <Link to="/files/justin_koo_resume.pdf" className="topnav-link" target="_blank" download>Resume</Link>
            </div>
          </nav>
          <div className="main-container">
            {/* Outlet: Component that contains the actual page content */}
            <Outlet/>
          </div>
          <nav className="botnav-container">
            {/* Contacts section */}
            <HugeTitle>Interested? Let's Get in Touch!</HugeTitle>
            <TwoColContainer left_col_boundary={2} right_col_boundary={5} >
                <p>I am mostly active on <Anchor href={"https://www.linkedin.com/in/koo-justin/"} inline={true}>LinkedIn
                </Anchor> and <Anchor href={"https://github.com/jhtkoo0426"} inline={true}>GitHub</Anchor>.</p>
            </TwoColContainer>
          </nav>
        </div>
      </div>
    );
};

export default Layout;