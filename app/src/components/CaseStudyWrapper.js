// React.js component for wrapping information of a case study or project.
import { Link } from "react-router-dom";
import Subtitle from "./Subtitle";


// image: path to image
// vid: path to video
// title: name of case study/project
// organisation: organisation of case study/project
// role: role in case study/project
// Note: The description for the case study/project is in the "children" variable.
// url: Link to more details about the project.
// url_type: Identifies the type of url. Can be one of [internal, external].
const CaseStudyWrapper = ({ id, children, project_id, image, vid, title, organisation, url, url_type }) => {
    // Determine project_id magnitude to decide if we add a prefix "0".
    if (project_id < 10) {
        project_id = "0" + project_id.toString();
    }
    if (url_type === "internal") {
        return (
            <Link className="case-study-wrapper" to={url}>
                {/* Image/Video */}
                {
                    vid != null &&
                    <video className='cs-vid' autoPlay loop muted>
                        <source src={vid} type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                }
                {
                    image != null &&
                    <img className='cs-img' src={image} alt=""></img>
                }
                <div className="cs-content">
                    {/* Project No. + organisation */}
                    <div className="cs-title">
                        <p>{project_id} - {organisation}</p>
                        {/* Project title */}
                        <Subtitle>{title}</Subtitle>
                    </div>
                    {/* Brief description */}
                    {children}
                </div>
            </Link>
        )
    } else {
        return (
            <a className="case-study-wrapper" href={url} target="_blank" rel="noreferrer">
                {/* Image/Video */}
                {
                    vid != null &&
                    <video className='cs-vid' autoPlay loop muted>
                        <source src={vid} type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                }
                {
                    image != null &&
                    <img className='cs-img' src={image} alt=""></img>
                }
                <div className="cs-content">
                    {/* Project No. + organisation */}
                    <div className="cs-title">
                        <p>{project_id} - {organisation}</p>
                        {/* Project title */}
                        <Subtitle>{title}</Subtitle>
                    </div>
                    {/* Brief description */}
                    {children}
                </div>
            </a>
        )
    }
}

export default CaseStudyWrapper