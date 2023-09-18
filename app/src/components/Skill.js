// React.js component for displaying a core skill.


const Skill = ({ id, children, title, number}) => {
    return (
        <div className="skill-item">
            <div className="skill-name">
                <span>{number}</span>
                <p>{title}</p>
            </div>
            {children}
        </div>
    )
}

export default Skill;