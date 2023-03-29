import Anchor from './Anchor';
import { Link } from 'react-router-dom';
import TechStack from './TechStack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


// React.js component for work experience descriptions.
const WorkExperienceWrapper = ({ image, vid, title, role, allow_explore, explore_link, github_link, tech_stack, children }) => {
    return (
        <div className="exp-wrapper">
            <div className='exp-content-title-wrapper'>
                <p className="exp-content-title">{title}</p>
                {   
                    github_link != null &&
                    <a href={github_link} target={"_blank"}>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                }
            </div>
            <div className="exp-content">
                {
                    vid != null &&
                    <video className='exp-video' autoPlay loop muted controls>
                        <source src={vid} type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                }
                {
                    image != null &&
                    <img className='exp-image' src={image} alt=""></img>
                }
                {children}
                <br></br>
                {
                    allow_explore == true &&
                    <span className='exp-link-guide'>
                        <Link className='exp-link' to={explore_link}>EXPLORE</Link>
                        <svg className='arrow' width="45" height="11" viewBox="0 0 45 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.6364 9.98889L44 5.98889M44 5.98889L39.6364 1.98889M44 5.98889H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                }
            </div>
        </div>
    )
}

export default WorkExperienceWrapper;