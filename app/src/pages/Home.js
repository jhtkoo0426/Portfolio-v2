import Anchor from '../components/Anchor';
import Container from '../components/Container';

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import l4s_landing from "../media/l4s_landing.jpg";
import l4s_demo from "../videos/l4s-demo.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarAlt, faCalendarDay, faCalendarDays } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div className='homepage'>
            <Container id={"landing"}>
                <div className='landing-grid'>
                    <ParallaxProvider>
                        <Parallax speed={0}>
                            <p className='intro'>Hi there, I'm Justin!</p>
                            <br></br>
                            <h1 className='intro-title'>I'm a Student Developer Turning Your Paperballs Into a Paperplane</h1>
                        </Parallax>
                        <Parallax speed={20}>
                            <p className='about'>I am currently pursuing a Computer Science degree at University College London, with 
                                a special focus on data analysis and financial markets.</p>
                        </Parallax>
                    </ParallaxProvider>
                </div>
            </Container>
            <Container id={"experience-intro"}>
                <h1 className=''>Work Experience</h1>
            </Container>
            <Container id={"look4schoolsuk"}>
                <ParallaxProvider>
                    <Parallax speed={10}>
                        <div className='exp-wrapper'>
                            <img src={l4s_landing} alt=""></img>
                            <div className='exp-content'>
                                <h1 className=''>Look4SchoolsUK</h1>
                                <span><FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>Apr 2020 - Apr 2022</span>
                                <p>Business Analyst (Student Job, Part-time)</p>
                                <br></br>
                                <p>During university, I worked at Look4SchoolsUK, an education platform. In a span of 2 years, 
                                    I developed a webapp prototype for the company, which identified and prevented 
                                    loopholes in some of its planned features and web flows. I also helped with ad-hoc 
                                    tasks including <span className='underline'>data collection and analysis</span> on
                                    UK school data.</p>
                                <div className='tech-stack'>
                                    <span>Python</span>
                                    <span>Django</span>
                                    <span>Excel & CSV</span>
                                    <span>Data Analysis</span>
                                    <span>Full-stack Development</span>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <Parallax speed={35}>
                        <div className='exp-wrapper'>
                            <div className='exp-content'>
                                <p>I had a lot of fun building the prototype webapp for the company. Although I had little
                                    web development experience in the past, I was able to quickly adapt by extensively
                                    going through Django tutorials and documentation.</p>
                                <br></br>
                                <p>I was able to visualise the data I had collected from previous tasks and generate interactive
                                    graphs with Chart.js, like the one below:</p>
                            </div>
                            <video autoPlay loop muted>
                                <source src={l4s_demo} type='video/mp4'></source>
                            </video>
                        </div>
                        <br></br><br></br>
                        <div className='exp-wrapper'>
                            <div className='exp-content'>
                                <h1 className=''>UCL Industry Exhange Network</h1>
                                <span><FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>Oct 2021 - May 2022</span>
                                <p>Software Engineer</p>
                                <br></br>
                                <p>I was fortunate to participate in the UCL Industry Exchange Network and worked on a 
                                    Natural Language Processing team project with the NHS. Although not being well-versed in 
                                    NLP, being able to think critically and learn quickly has helped me swiftly adapt to the 
                                    environment, and contribute to the project, as well as solving obstacles along the way. 
                                    Our solution is currently under evaluation and is a potential candidate to be distributed 
                                    as software within the NHS frontlines in the future.</p>
                                <div className='tech-stack'>
                                    <span>Python</span>
                                    <span>Django</span>
                                    <span>Natural Language Processing</span>
                                    <span>Full-stack Development</span>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </Container>
            <Container id={"works-intro"}>
                <h1 className=''>Selected Works</h1>
            </Container>
            <Container id={"works"}>
                <div className='abt-me-container'>
                    <ParallaxProvider>
                        <Parallax speed={0}>
                            <p className='p-mid'>Outside of university, I enjoy learning new things 😀</p>
                            <p>At the moment, I'm deep-diving into machine learning and working on a side project 
                                related to <span className='underline'>algorithmic trading</span>. In the future, 
                                I want to pursue a career in the financial market as a quantitative analyst, 
                                and make use of the knowledge and mindset I acquired along my SWE jounrey.</p>
                        </Parallax>
                    </ParallaxProvider>
                </div>
            </Container>
        </div>
    );
}

export default Home