// React.js component for a project/case study showcase.


// tags (array): An array of relative tech tags to categorize the project.
const SimpleShowcase = ({ id, children, project_name, tags, image, vid}) => {
    return (
        <div className={"showcase-container"} id={id}>
            <h3 className="project-name">{project_name}</h3>
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