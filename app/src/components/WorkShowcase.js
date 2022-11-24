// React.js component to display a selected project.
const WorkShowcase = ({ id, title, descr, link, children, bgColor, color, image }) => {
    return (
        <a href={link} className="work-showcase-container" id={id} style={{backgroundColor: bgColor}}>
            <div className="showcase-img">
                <img src={image} alt=""></img>
            </div>
            <div className="showcase-content">
                <h1 className="h1-small showcase-title" style={{color: color}}>{title}</h1>
                <p className="p-mid showcase-descr" style={{color: color}}>{descr}</p>
                { children }
            </div>
        </a>
    )
}

export default WorkShowcase