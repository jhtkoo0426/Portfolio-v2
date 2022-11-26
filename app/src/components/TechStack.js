// React.js component to list technologies used for a job/project.
const TechStack = ({ id, tags }) => {
    return (
        <div className="tech-stack">
            {tags.map(function(object, key) {
                return <span className="sw-tool">{object}</span>
            })}
        </div>
    )
}

export default TechStack;