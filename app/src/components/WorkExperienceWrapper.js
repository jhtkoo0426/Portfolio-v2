import Anchor from './Anchor';
import { Link } from 'react-router-dom';
import TechStack from './TechStack';


// React.js component for work experience descriptions.
const WorkExperienceWrapper = ({ image, vid, title, role, allow_explore, explore_link, tech_stack, children }) => {
    return (
        <div className="exp-wrapper">
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
            <div className="exp-content">
                <h1 className="exp-content-title">{title}</h1>
                <p className='exp-role'>{role}</p>
                <br></br>
                {children}
                <br></br>
                {
                    tech_stack != null &&
                    <TechStack tags={tech_stack}></TechStack>
                }
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