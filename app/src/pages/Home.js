import Anchor from "../components/Anchor";
import SimpleShowcase from "../components/SimpleShowcase";
import Title from "../components/Title";
import dissertation_demo from "../videos/dissertation-demo.mp4";
import autofaq from "../media/nlp.png";
import l4s from "../videos/l4s-demo.mp4";


const Home = () => {
    return (
        <>
            {/* Introduction */}
            <div className="intro">
                <Title id={"intro"} size={"huge"} is_transparent={false}>
                    an analytical mind who <span className="orange">explores</span>
                </Title>
                <div class="blob blob-inner">
                    <span></span>
                    <span></span>
                    <a class="content" href="#intro2">
                        <p>find out more...</p>
                    </a>
                </div>
            </div>
            
            {/* Depth intro */}
            <Title size={"small"} id="intro2">
                Hi! I'm <span class="purple">Justin</span>, an aspiring computer science graduate
                architecting the future with a foundation of data, currently living in the UK.
            </Title>

            <div className="depth-intro">
                <p>My experience comes from working with multi-disciplinary teams and projects 
                to solve real-life problems through data analytics and computing skills. During 
                projects, I maintain frequent communication between teammates and clients to 
                ensure everyone works on the same page.</p>
                <br></br>
                <p>I prefer to listen carefully before providing solutions and analytics with 
                a perfect blend of preferences of my partners/clients, my experience, research 
                and best practices.</p>
            </div>

            {/* Brief project showcases */}
            <div className="showcases-container">
                <Title size={"standard"}>Case Studies & Projects</Title>
                <SimpleShowcase detailed={false} project_name={"Robust Robotic Grasping Utilising Touch Sensing"} 
                tags={["Machine Learning", "Data Collection"]} vid={dissertation_demo}>
                    <p>My final year dissertation project on developing a robust learning-guided system 
                    for grasping unknown objects, conducted with the <Anchor inline={true} underline={false}>
                    Statistical Machine Learning Group @ UCL</Anchor>. The presented model optimises common 
                    training considerations such as balancing trade offs between dataset size and accuracy.</p>
                </SimpleShowcase>
                <SimpleShowcase detailed={false} project_name={"AutoFAQ - A Text-to-Speech Analysis Tool for NHS Employees"} 
                tags={["Data Visualization", "NLP"]} image={autofaq}>
                    <p>A client-faced team project under the UCL Industry Exchange Network. Focused 
                    on improving the pipeline and visualisation tools of an existing web 
                    application to provide NHS practitioners with non-technical means to 
                    analyse voice recordings between doctors and patients.</p>
                </SimpleShowcase>
                <SimpleShowcase detailed={false} project_name={"Analysing and Visualizing the Academic Performance of UK Schools"} 
                tags={["Data Analysis", "Data Visualization", "Data Collection"]} vid={l4s}>
                    <p>Evaluated the educational performance of UK schools via various metrics 
                    such as GCE and GCSE results, Oxbridge admission statistics, third-party 
                    inspection reports, and government data on school information.</p>
                </SimpleShowcase>
            </div>
        </>
    );
}

export default Home