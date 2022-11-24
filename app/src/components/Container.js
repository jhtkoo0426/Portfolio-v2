// React.js component for a basic 100vh container.
const Container = ({ id, children}) => {
    return (
        <div className="container" id={id}>
            { children }
        </div>
    )
}

export default Container