import TechStack from './TechStack';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';


// React.js component for work experience descriptions.
const WorkExperienceWrapper = ({ image, vid, company_name, duration, role, children, tech_stack}) => {
    return (
        <div className="exp-wrapper">
            <img className='exp-image' src={image} alt=""></img>
            <div className="exp-content">
                <h1 className="exp-content-title">{company_name}</h1>
                {
                    duration != null &&
                    <span className='exp-duration'>
                        {duration}
                    </span>
                }
                <p className='exp-role'>{role}</p>
                <br></br>
                {children}
                <TechStack tags={tech_stack}></TechStack>
            </div>
            {
                vid != null &&
                <video autoPlay loop muted>
                    <source src={vid} type="video/mp4"></source>
                </video>
            }
        </div>
    )
}

export default WorkExperienceWrapper;