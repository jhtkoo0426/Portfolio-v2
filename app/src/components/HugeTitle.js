// React.js component for a huge title.
// left_col_boundary & right_col_boundary are used to align with the background stripes.
// is_transparent: Conditionally apply styling for the title.
const HugeTitle = ({ id, children, left_col_boundary, right_col_boundary, is_transparent}) => {
    if (is_transparent) {
        return (
            <div className="huge-title transparent" id={id} style={{gridColumn: `${left_col_boundary} / ${right_col_boundary}`}}>
                { children }
            </div>
        )
    } else {
        return (
            <div className="huge-title" id={id} style={{gridColumn: `${left_col_boundary} / ${right_col_boundary}`}}>
                { children }
            </div>
        )
    }
}

export default HugeTitle