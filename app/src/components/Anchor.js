// React.js component for anchor with applied CSS effects.
const Anchor = ({ id, children, href, inline }) => {
    if (inline) {
        return (
            <a className={`anchor inline`} href={href} target="_blank" id={id} rel="noreferrer">{ children }</a>
        )
    } else {
        return (
            <a className={`anchor`} href={href} target="_blank" id={id} rel="noreferrer">{ children }</a>
        )
    }
    
}

export default Anchor