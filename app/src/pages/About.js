import Anchor from "../components/Anchor";
import Skill from "../components/Skill";
import SimpleShowcase from "../components/SimpleShowcase";
import Title from "../components/Title";

import epidemic from "../videos/epidemic-demo.mp4";


const About = () => {
    return (
        <>
            <div className="about-intro">
                <Title size={"huge"}>Nice to meet <span className="orange"> you</span> too :)</Title>
                <p>I approach every challenge with curiosity and a growth mindset. I believe 
                that the rapid evolution of technology requires continuous learning and 
                adaptation. I stay up-to-date with the latest industry trends and embrace 
                emerging technologies to stay ahead of the curve.</p>
            </div>

            {/* TODO: My praactices and approach to problems */}
            <div className="skills-container">
                <div className="skills-content">
                    <blockquote>
                        <p>"Tell me and I forget. Teach me and I remember. Involve me and I learn."</p>
                        <footer style={{textAlign: "right"}}><p>- Benjamin Franklin</p></footer>
                    </blockquote>
                    <Title size={"small"}>What sets me apart is my flexibility and eagerness to 
                    explore different aspects of technology. Here's how I can contribute:</Title>
                    <div className="list-of-skills">
                        <Skill title={"Software Engineering"} number={"01"}>
                            <p>I excel in developing software solutions that not only meet technical 
                            requirements but also deliver exceptional user experiences. From designing 
                            elegant user interfaces to optimizing code for efficiency, I'm dedicated to 
                            delivering high-quality software.</p>
                        </Skill>
                        <Skill title={"Data Analysis"} number={"02"}>
                            <p>My analytical mindset enables me to extract valuable insights from data. 
                            I am skilled in using tools like Microsoft Excel, R and SQL (BigQuery, MySQL)
                            to turn data into actionable information. Whether it's market trends, user 
                            behavior, or financial data, I can uncover meaningful patterns.</p>
                        </Skill>
                        <Skill title={""} number={"03"}>
                            <p>I approach every challenge with curiosity and a growth mindset. I believe 
                            that the rapid evolution of technology requires continuous learning and 
                            adaptation. I stay up-to-date with the latest industry trends and embrace 
                            emerging technologies to stay ahead of the curve.</p>
                        </Skill>
                    </div>
                </div>
            </div>

            {/* Playground section */}
            <div className="playground-container" id="playground">
                <Title size={"huge"}>Playground & Exploration</Title>
                <br></br>
                <p><span className="orange">Lifelong learning</span> is one of my burning passions. 
                Outside of work, I venture into interesting and unfamiliar fields, not limited to stock 
                trading & asset management, competitive coding, web development, cooking, and gaming 
                (yes, I love the thrill when learning to #getgud at games!).</p>
                <p>Recently, I started a habit of building monthly coding projects, where I would 
                apply what I've learnt throughout my journey to create something simulating:</p>
                
                {/* Project showcases */}
                <div className="showcases">
                    <SimpleShowcase project_name={"Epidemic Simulator"} vid={epidemic}
                        has_link={true} link={"https://github.com/jhtkoo0426/Epidemic-Simulation"}>
                        <p>A simple web simulation to visualise the impact of human behaviour on the
                        rate and scale of transmission of diseases.</p>
                    </SimpleShowcase>

                    {/* TODO: Add more projects here */}
                </div>
            </div>
        </>
    );
}

export default About