// React.js component for a project/case study showcase.
import Anchor from "./Anchor";


// tags (array): An array of relative tech tags to categorize the project.
// has_link (bool): If true, redirect to individual showcase page.
const SimpleShowcase = ({ id, children, project_name, tags, image, vid, has_link, link}) => {
    return (
        <div className={"showcase-container"} id={id}>
            <Anchor href={link} target={true}>
                <div className="showcase-title">
                    <h3 className="project-name">{project_name}</h3>
                    {
                        has_link === true &&
                        <div className="arrow">
                            <span className="link__arrow">
                                <span></span>
                                <span></span>
                            </span>
                            <span className="link__line"></span>
                        </div>
                    }
                </div>
            </Anchor>
            <br></br>
            {
                tags != null &&
                <div className="tags">
                    { tags.map((object, i) => <span>{object}</span>)}
                </div>
            }
            {/* Image/Video */}
            {
                vid != null &&
                <video className='showcase-vid' autoPlay loop muted>
                    <source src={vid} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
            }
            {
                image != null &&
                <img className='showcase-image' src={image} alt=""></img>
            }
            { children }
        </div>
    )
}

export default SimpleShowcase;