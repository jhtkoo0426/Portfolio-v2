// React.js component for a basic 100vh container.
// left_col_boundary & right_col_boundary are used to align vertical content.
const Container = ({ id, children, col1_width, col2_width, left_col_boundary, right_col_boundary}) => {
    return (
        <div className="container" id={id} style={{gridTemplateColumns: `${col1_width} ${col2_width}`, gridColumn: `${left_col_boundary} / ${right_col_boundary}`}}>
            { children }
        </div>
    )
}

export default Container