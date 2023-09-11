// React.js component for a huge title.
// left_col_boundary & right_col_boundary are used to align with the background stripes.
const HugeTitle = ({ id, children, left_col_boundary, right_col_boundary}) => {
    return (
        <div className="huge-title" id={id} style={{gridColumn: `${left_col_boundary} / ${right_col_boundary}`}}>
            { children }
        </div>
    )
}

export default HugeTitle