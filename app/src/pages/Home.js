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
                <br></br>
                <h1 className='intro-title'>I'm a <span className='span purple'>Student Developer</span> Turning 
                Your Paperballs Into a Paperplane</h1>
                <p className='about'>I am currently pursuing a <span className='purple'>Computer Science</span> degree
                    at University College London. I am passionate about combining my love for statistics and programming to solve complex 
                    problems.</p>
            </Container>
            <Container id={"about-me"}>
                <p className='large-text'>In early 2021, I particpated in the 6th Hex Cambridge hackathon, where I developed a simple
                    arbitrage algorithm with 2 friends. We used machine learning techniques and real-time data feeds to build a system 
                    that could accurately predict price differences between two markets and execute trades to capitalize on those 
                    differences.This opportunity sparked my interest in the intersection of tech and finance, which made me realise the 
                    potential of combining my technical skills with my newfound interest in finance. Since then, I have been taking courses
                    in finance and analysis methods, and I have been exploring projects and opportunities in the field. I am excited to bring
                    my passion and technical skills to a role where I can make a meaningful impact.</p>
            </Container>
            <Container id={"experience-intro"}>
                <h1 className='subtitle'>Work Experience</h1>
            </Container>
            <Container id={"work-experience"}>
                <WorkExperienceWrapper
                    vid={l4s_demo}
                    title={"Look4SchoolsUK"}
                    role={"Business Analyst (Student Job, Part-time)"}
                    allow_explore={true}
                    explore_link={null}
                >
                    {/* Role Description as props.children */}
                    <p>During university, I worked at Look4SchoolsUK, an education platform. In a span of 2 years, 
                        I developed a <span className='purple'>webapp prototype</span> for the company, which 
                        <span className='purple'> prevented loopholes</span> in some of its web flows. I also 
                        helped with ad-hoc tasks including <span className='purple'>data collection and 
                        analysis</span> on UK school data.</p>
                </WorkExperienceWrapper>
                <div>
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
                        title={"Research Project"}
                        role={"for my UCL BSc Final Year Project"}
                        allow_explore={false}
                        explore_link={null}
                    >
                        <p>I am currently working on a research project related to robust robotic grasping at 
                            the <Anchor href="https://www.sml-group.cc">Statistical Machine Learning Group</Anchor>, as part of my 
                            final year curriculum at UCL.</p>
                    </WorkExperienceWrapper>
                </div>
                
            </Container>
            <Container id={"works-intro"}>
                <h1 className='subtitle'>Selected Works</h1>
            </Container>
            <Container id={"works"}>
                <WorkExperienceWrapper
                    title={"Guiana Chestnut"}
                    role={"Featured project"}
                    allow_explore={true}
                    explore_link={null}
                    tech_stack={["Python", "Django", "Finnhub.io API", "Sentiment Analysis"]}
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
                <WorkExperienceWrapper
                    title={"Pathfinder"}
                    allow_explore={false}
                    explore_link={null}
                    tech_stack={["Python", "Path-finding algorithms", "Data structures"]}
                    image={pathfinder_demo}
                    github_link={"https://github.com/jhtkoo0426/Pathfinder"}
                >
                    <p>An interactive web application that visualises the route-finding process between 2 London 
                        Underground stations. The project is based off one of my university couresworks on data
                        structures and algorithms.</p>
                </WorkExperienceWrapper>
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