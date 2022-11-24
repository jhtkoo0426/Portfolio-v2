// React.js component to list out the software tools used for the
// WorkShowcase.js component.

const SoftwareStack = ({ tools }) => {
    return (
        <div className="sw-stack">
            {tools.map(function(object, key) {
                return <span className="sw-tool">{object}</span>
            })}
        </div>
    )
}

export default SoftwareStack