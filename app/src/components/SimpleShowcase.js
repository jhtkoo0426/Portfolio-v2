// React.js component for a project/case study showcase.


// tags (array): An array of relative tech tags to categorize the project.
const SimpleShowcase = ({ id, children, project_name, tags, img, vid}) => {
    return (
        <div className={"showcase-container"} id={id}>
        <h4 className="project-name">{project_name}</h4>
            <div className="tags">
                { tags.map((object, i) => <span>{object}</span>)}
            </div>
            { children }
        </div>
    )
}

export default SimpleShowcase;