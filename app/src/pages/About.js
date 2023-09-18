import Anchor from "../components/Anchor";
import SimpleShowcase from "../components/SimpleShowcase";
import Title from "../components/Title";

import epidemic from "../videos/epidemic-demo.mp4";


const About = () => {
    return (
        <div className="about">
            <div className="about-intro">
                <Title size={"huge"}>Nice to meet <span className="orange"> you</span> too :)</Title>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.</p>
                <br></br>
                <blockquote>
                    <p>"Tell me and I forget. Teach me and I remember. Involve me and I learn."</p>
                    <footer style={{textAlign: "right"}}><p>- Benjamin Franklin</p></footer>
                </blockquote>
            </div>

            {/* TODO: My praactices and approach to problems */}
            <div className="practices-container">
                <div className="practices-content">
                    <p>Using the right tools with a well structured process leads to the collaboration’s 
                    success</p>
                    <Title size={"small"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.</Title>
                </div>
            </div>

            {/* Playground section */}
            <div className="playground-container" id="playground">
                <Title size={"huge"}>Playground & Exploration</Title>
                <p><span className="orange">Lifelong learning</span> is one of my burning passions. 
                Outside of work, I venture into interesting and unfamiliar fields, not limited to stock 
                trading & asset management, competitive coding, web development, cooking, and gaming 
                (yes, I love the thrill when learning to #getgud at games!).</p>
                <br></br>
                <p>Recently, I started a habit of building monthly coding projects, where I would 
                apply what I've learnt throughout my journey to create something simulating:</p>
                
                {/* Project showcases */}
                <div className="showcases">
                    <SimpleShowcase project_name={"Epidemic Simulator"} vid={epidemic} 
                        tags={["Simulation", "Random Walks", "Web Development (React.js)"]}>
                        <p>A simple web simulation to visualise the impact of human behaviour on the
                        rate and scale of transmission of diseases.</p>
                    </SimpleShowcase>

                    {/* TODO: Add more projects here */}
                </div>
            </div>
        </div>
    );
}

export default About