import Anchor from '../components/Anchor';
import Container from '../components/Container';
import WorkExperienceWrapper from '../components/WorkExperienceWrapper';
import l4s_demo from "../videos/l4s-landing-demo.mp4";
import guiana_demo from "../videos/guiana-aapl.mp4";
import pathfinder_demo from "../media/pathfinder-screenshot.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';

import "../css/workExperienceWrapper.scss";


const Home = () => {
    function copy_email() {
        navigator.clipboard.writeText("jhtkbusiness@gmail.com");
    }

    return (
        <div className='homepage'>
            <Container id={"landing"}>
                <p className='intro'>Hi there, I'm Justin!</p>
                <p className='intro'>I'm a student data scientist passionate about  combining my love for statistics and programming to solve complex 
                    problems.</p>
                <br></br>
                <div className='work-grid'>
                    <WorkExperienceWrapper
                        vid={l4s_demo}
                        title={"Look4SchoolsUK - Business Analyst (Student Job, Part-time)"}
                        allow_explore={false}
                        explore_link={null}
                    >
                        {/* Role Description as props.children */}
                        <p>During university, I worked at Look4SchoolsUK, an education platform. In a span of 2 years, 
                            I developed a <span className='purple'>webapp prototype</span> for the company, which 
                            <span className='purple'> prevented loopholes</span> in some of its web flows. I also 
                            helped with ad-hoc tasks including <span className='purple'>data collection and 
                            analysis</span> on UK school data.</p>
                    </WorkExperienceWrapper>
                    <WorkExperienceWrapper
                        title={"Research Project (UCL Final Year Project)"}
                        allow_explore={false}
                        explore_link={null}
                    >
                        <p>I am currently working on a research project related to robust robotic grasping at 
                            the <Anchor href="https://www.sml-group.cc">Statistical Machine Learning Group</Anchor>, as part of my 
                            final year curriculum at UCL.</p>
                    </WorkExperienceWrapper>
                    <WorkExperienceWrapper
                        title={"UCL Industry Exchange Network"}
                        role={"Software Engineer"}
                        allow_explore={false}
                        explore_link={null}
                    >
                        {/* Role Description as props.children */}
                        <p>I was fortunate to participate in the exchange network with 2 coursemates on a Natural Language 
                            Processing project. We were able to apply our knowledge in <span className='purple'>
                            software development cycles</span> (gathering requirements, prototyping, testing, etc.) to 
                            develop an <span className='purple'>end-to-end</span> solution for our client.</p>
                    </WorkExperienceWrapper>
                    <WorkExperienceWrapper
                        title={"Guiana Chestnut"}
                        role={"Featured project"}
                        allow_explore={false}
                        explore_link={null}
                        vid={guiana_demo}
                        github_link={"https://github.com/jhtkoo0426/Guiana-Chestnut"}
                    >
                        <p>This is my most ambitious project so far that combines multiple technologies that I have 
                            acquired along my journey, including NLP for market sentiment analysis, data analysis
                            for balance sheets and web development.</p>
                        <br></br>
                        <p>Why re-invent the wheel when so many screening services are available? The main is I 
                            hope that this project can demonstrate my skillset through developing an end-to-end 
                            system, built using highly-transferrable skills.</p>
                    </WorkExperienceWrapper>
                </div>
            </Container>
            <Container id={"contacts"}>
                <div className='contacts-container'>
                    <div className='contacts-title'>
                        <h1 className='subtitle'>Interested?</h1>
                        <h1 className='subtitle'>Let's get in touch!</h1>
                    </div>
                    <div className='contacts-text'>
                        <p>I am currently looking for an <span className='purple'>internship/graduate scheme </span> 
                            opportunity to gain some more hands-on experience. I'd love learn and play around with
                            new technologies in software engineering and machine learning!</p>
                        <button className='reach-out email' onClick={copy_email}>
                            <span>
                                <FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon>
                                <p>jhtkbusiness@gmail.com</p>
                                <p className='click-to-copy'>Click to copy!</p>
                            </span>
                        </button>
                        <p>You can also find me via <span className='span'>phone</span>:</p>
                        <div className='reach-out'>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <p>London: <br></br> (+44) 7427 566966</p>
                            <p>Hong Kong: <br></br> (+852) 9728 2865</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home