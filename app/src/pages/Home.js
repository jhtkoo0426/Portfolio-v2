import Anchor from '../components/Anchor';
import Container from '../components/Container';
import WorkExperienceWrapper from '../components/WorkExperienceWrapper';
import TechStack from '../components/TechStack';

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import l4s_demo from "../videos/l4s-landing-demo.mp4";
import guiana_demo from "../videos/guiana-aapl.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';

import "../css/workExperienceWrapper.scss";
import { useRef } from 'react';


const Home = () => {
    function copy_email() {
        navigator.clipboard.writeText("jhtkbusiness@gmail.com");
    }

    return (
        <div className='homepage'>
            <Container id={"landing"}>
                <ParallaxProvider>
                    <Parallax speed={0}>
                        <p className='intro'>Hi there, I'm Justin!</p>
                        <br></br>
                        <h1 className='intro-title'>I'm a <span className='span purple'>Student Developer</span> Turning 
                        Your Paperballs Into a Paperplane</h1>
                    </Parallax>
                    <Parallax speed={20}>
                        <p className='about'>I am currently pursuing a <span className='purple'>Computer Science</span> degree
                            at University College London, with a special focus on data analysis and financial markets.</p>
                    </Parallax>
                </ParallaxProvider>
            </Container>
            <Container id={"about-me"}>
                <p className='large-text'>Outside of university, I enjoy learning new things. At the moment, I'm deep-diving 
                    into machine learning and working on a side project related to <span className='purple'>algorithmic 
                    trading</span>. In the future, I want to pursue a career in the financial market as a 
                    <span className='purple'> quantitative analyst</span>, and apply the knowledge and mindset I 
                    acquired along my SWE jounrey so far.</p>
            </Container>
            <Container id={"experience-intro"}>
                <h1 className='subtitle'>Work Experience</h1>
            </Container>
            <Container id={"work-experience"}>
                <ParallaxProvider>
                    <Parallax speed={15}>
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
                    </Parallax>
                    <Parallax speed={35}>
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
                    </Parallax>
                </ParallaxProvider>
            </Container>
            <Container id={"works-intro"}>
                <h1 className='subtitle'>Selected Works</h1>
            </Container>
            <Container id={"works"}>
                <ParallaxProvider>
                    <Parallax speed={15}>
                        <WorkExperienceWrapper
                            title={"Guiana Chestnut"}
                            role={"Featured project"}
                            allow_explore={true}
                            explore_link={null}
                            tech_stack={["Python", "Django", "Finnhub.io API", "Sentiment Analysis"]}
                            vid={guiana_demo}
                        >
                            <p>Guiana Chestnut (Money Tree) is my most ambitious project so far that combines multiple 
                                technologies that I have acquired so far, from full-stack web development to stock 
                                analysis.</p>
                            <br></br>
                            <p>Why re-invent the wheel when so many screening services are available? The main is I 
                                hope that this project can demonstrate my skillset through developing an end-to-end 
                                system, built using highly-transferrable skills.</p>
                        </WorkExperienceWrapper>
                    </Parallax>
                    <Parallax speed={25}>
                        <WorkExperienceWrapper
                            title={"Pathfinder"}
                            allow_explore={false}
                            explore_link={null}
                            tech_stack={["Python", "Path-finding algorithms", "Data structures"]}
                        >
                            <p>An interactive web application that visualises the route-finding process between 2 London 
                                Underground stations. The project is based off one of my university couresworks on data
                                structures and algorithms.</p>
                        </WorkExperienceWrapper>
                    </Parallax>
                </ParallaxProvider>
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
                            new technologies in software engineering and data analysis!</p>
                        <button className='reach-out email' onClick={copy_email}>
                            <FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon>
                            <p>jhtkbusiness@gmail.com</p>
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