// React.js component for a subtitle.
const Subtitle = ({ id, children}) => {
    return (
        <div className="subtitle" id={id}>
            { children }
        </div>
    )
}

export default Subtitle