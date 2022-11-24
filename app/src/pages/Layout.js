import { Outlet, Link } from "react-router-dom";
import Anchor from "../components/Anchor";


const Layout = () => {
    // Inertia scroll: https://codepen.io/Neil98/pen/VREJZb
    const body = document.body;
    const main = document.getElementById('root');
    
    // For scroll positions
    let sx = 0, sy = 0;

    // For container positions
    let dx = sx, dy = sy;
    
    body.style.height = main.clientHeight + 'px';
    
    main.style.top = 0;
    main.style.left = 0;
    
    // Bind a scroll function
    window.addEventListener('scroll', easeScroll);
    
    function easeScroll() {
        sx = window.pageXOffset;
        sy = window.pageYOffset;
    }
    
    window.requestAnimationFrame(render);
    
    function render(){
        //We calculate our container position by linear interpolation method
        dx = li(dx,sx,0.05);
        dy = li(dy,sy,0.05);

        dx = Math.floor(dx * 100) / 100;
        dy = Math.floor(dy * 100) / 100;
      
        main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
        window.requestAnimationFrame(render);
    }
    
    function li(a, b, n) {
        return (1 - n) * a + n * b;
    }
  
    return (
      /* Topnav + content + botnav wrapper for pages */
      <div className="app">
        <nav className="topnav">
          <Link to="/">j.</Link>
          <div></div>
          <div className="topnav-menu">
              <Anchor href="https://github.com/jhtkoo0426/">
                Github
              </Anchor>
          </div>
        </nav>  
        {/* Outlet: Component that contains the actual page content */}
        <div className="main">
          <Outlet/>
        </div>
        <nav className="botnav">
          <Anchor href={"https://github.com/jhtkoo0426"}>
              Designed & created by Justin Koo
          </Anchor>
        </nav>
      </div>
    );
};

export default Layout;