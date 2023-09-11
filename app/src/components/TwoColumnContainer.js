// React.js component for a container with 100% width and 2 columns.
// left_col_boundary & right_col_boundary are used to align with the background stripes.
const TwoColContainer = ({ id, children, col1_width, col2_width, left_col_boundary, right_col_boundary}) => {
    return (
        <div className="twocol-container" id={id} style={{gridTemplateColumns: `${col1_width} ${col2_width}`, gridColumn: `${left_col_boundary} / ${right_col_boundary}`}}>
            { children }
        </div>
    )
}

export default TwoColContainer