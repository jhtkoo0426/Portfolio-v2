import Anchor from "../components/Anchor";
import SimpleShowcase from "../components/SimpleShowcase";
import Title from "../components/Title";


const Home = () => {
    return (
        <div className='home'>
            {/* Introduction */}
            <Title id={"intro"} size={"huge"} is_transparent={false}>
                a dyslexic creative who listens
            </Title>
            <Title id={"subintro"} size={"small"}>
                a data analyst architecting the future with a foundation of data.
            </Title>

            {/* A list of core skills */}
            <div className="skills-container">
                <p>Some of my core skills</p>
                <span>data analysis</span>
                <span>machine learning</span>
                <span>modelling & statistics</span>
                <span>data visualization</span>
            </div>

            {/* Depth intro */}
            <div className="depth-intro">
                <p>My name is Justin, a Data Analyst and Machine Learning Engineer currently
                based in London, UK.</p>
                <p>My experience comes from working with multi-disciplinary teams and projects 
                to solve real-life problems through data analytics and computing skills. During 
                projects, I maintain frequent communication between teammates and clients to 
                ensure everyone works on the same page.</p>
                <p>I prefer to listen carefully before providing solutions and analytics with 
                a perfect blend of preferences of my partners/clients, my experience, research 
                and best practices.</p>
                <Title id={"contact"} size={"small"}>
                    Want to learn how flexible and easy-going I am? Just <Anchor href={""}>say hello</Anchor>
                </Title>
                <p>or keep scrolling if you want to learn more...</p>
            </div>

            {/* Brief project showcases */}
            <div className="showcase-container">
                <SimpleShowcase detailed={false} project_name={"Robust Robotic Grasping Utilising Touch Sensing"} tags={["test", "test"]}>
                    <p>My final year dissertation project on developing a robust learning-guided 
                        system for grasping unknown objects, conducted with the SMLG at UCL. The 
                        presented model optimises common training considerations such as balancing 
                        trade offs between dataset size and accuracy.</p>
                </SimpleShowcase>
            </div>
        </div>
    );
}

export default Home