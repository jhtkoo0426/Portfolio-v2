import React, { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import Anchor from "../components/Anchor";
import Cursor from "../components/Cursor";
import Title from "../components/Title";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Layout = () => {
    var page_location = useLocation();

    return (
      <>
        <Cursor></Cursor>
        <div className="app-container" id="app-container">
          {/* Top navigation bar */}
          <div className="empty-container"></div>
          <nav className="topnav-container">
            <div className="home-button">
              <Link to={"/"}>
                <p className="j">j.</p>
                {/* Changes the displayed page name depending on which page the user is on.
                    Note: The nested ternary is for dealing with paths ending with a '/' character. */}
                <p className="job-title">
                  { page_location.pathname === "/"
                    ? "data analyst & ML engineer"
                    : page_location.pathname.endsWith("/")
                      ? page_location.pathname.substring(0, page_location.pathname.length-1)
                      : page_location.pathname
                  }
                </p>
              </Link>
            </div>
            <div className="topnav-menu">
              <Link className="anchor underline" to={"/about"}>about</Link>
              <HashLink smooth className="anchor underline" to={'/about/#playground'}>projects</HashLink>
              <Anchor inline={false} underline={true} href={"#contacts"} target={false}>contact</Anchor>
            </div>
          </nav>

          {/* Side navigation bar */}
          <nav className="sidenav-container">
            <ul>
              <li>
                <Anchor target={true} underline={true} href={"https://www.linkedin.com/in/koo-justin/"}>
                  LinkedIn
                </Anchor>
              </li>
              <li>
                <Anchor target={true} underline={true} href={"https://github.com/jhtkoo0426"}>
                  GitHub
                </Anchor>
              </li>
            </ul>
          </nav>

          {/* Container for the main content of the portfolio */}
          <div className="main-container" id="main-container">
            <Outlet/>
          </div>       
          
          {/* Bottom navigation bar */}
          <nav className="botnav-container" id="contacts">
            <div className="contacts-container">
              <div>
                <p>Still curious about how to bring those imaginative thoughts to life?</p>
                <Title size={"small"}>let's get in touch!</Title>
                <p>or you can find me via <Anchor target={true} inline={true} underline={false} href={"https://www.linkedin.com/in/koo-justin/"}>LinkedIn</Anchor>!</p>
              </div>
              <div className="blob2">
                <Anchor className="blob2" href={"mailto:jhtkbusiness@gmail.com"} target={true} underline={false}>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </Anchor>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
};

export default Layout;