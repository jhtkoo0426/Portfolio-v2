// React.js component for a variable-size title.
// size (options: huge, standard, small): Choose from a pre-defined font size.
// is_transparent (bool): Conditionally apply styling for the title.
const Title = ({ id, children, size, is_transparent}) => {
    return (
        <h1 className={"title " + (size) + (is_transparent === true ? " transparent" : "") } id={id}>
            { children }
        </h1>
    )
}

export default Title;