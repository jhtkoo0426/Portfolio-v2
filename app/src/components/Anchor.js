// React.js component for anchor with applied CSS effects.
// inline (bool): True for an inline anchor, false for a block anchor.
// underline (bool): True for an underline animation.
const Anchor = ({ id, children, href, inline, underline }) => {
    return (
        <a className={"anchor" + (inline === true ? " inline" : "") + (underline ===  true ? " underline" : "")} href={href} target="_blank" id={id} rel="noreferrer">{ children }</a>
    )
}

export default Anchor