import Anchor from '../components/Anchor';
import Container from '../components/Container';

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import l4s_landing from "../media/l4s_landing.jpg";
import l4s_demo from "../videos/l4s-demo.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    function copy_email() {
        navigator.clipboard.writeText("jhtkbusiness@gmail.com");


    }

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
                            <p className='about'>I am currently pursuing a <span className='span underline'>Computer Science</span> degree
                             at University College London, with a special focus on data analysis and financial markets.</p>
                        </Parallax>
                    </ParallaxProvider>
                </div>
            </Container>
            <Container id={"about-me-intro"}>
                <h1 className=''>About Me</h1>
            </Container>
            <Container id={"about-me"}>
                <div className='abt-me-container'>
                    <ParallaxProvider>
                        <Parallax speed={0}>
                            <p>Outside of university, I enjoy learning new things. At the moment, I'm deep-diving into machine 
                                learning and working on a side project related to <span className='span underline'>algorithmic 
                                trading</span>. In the future, I want to pursue a career in the financial market as a 
                                quantitative analyst, and make use of the knowledge and mindset I acquired along my SWE jounrey.</p>
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
                                    Our team delivered our solution and hopes that it could someday be distributed as within 
                                    the NHS frontlines to reduce their workload.</p>
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
                <ParallaxProvider>
                    <Parallax speed={5}>
                        <div className='selected-work' id='okane'>
                            <p className='project-title'>01 - Okane</p>
                            <p>A naive trading algorithm that I am building which embeds machine learning technqiues into
                                fundamental and technical analysis of stock symbols. The project was inspired by the 6th 
                                Hexcambridge Hackathon that I participated with my friends where we attempted to develop 
                                an arbitrage algorithm.</p><br></br>
                            <p>Okane queries financial data from finnhub.io to determine the market's attitude  towards 
                                a specific stock (overvalued or undervalued). I used sentiment analysis to process news
                                summaries of companies and time series forecasting to predict the future overall price 
                                trend of a stock.</p><br></br>
                            <p>Although naive, Okane can provide me with technical insight into the potential of
                                a stock using data analysis very quickly. This simple automation could be further developed
                                into a recommendation system that may make better decisions on trading strategies than myself :).</p>
                        </div>
                    </Parallax>
                    <Parallax speed={25}>
                        <div className='selected-work' id='okane'>
                            <p className='project-title'>02 - Pathfinder</p>
                            <p>An interactive web application that visualises the route-finding process between 2 London 
                                Underground stations. The project is based off one of my university couresworks on data
                                structures and algorithms.</p>
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </Container>
            <Container id={"contacts"}>
                <div className='contacts-container'>
                    <div className='contacts-title'>
                        <h1>Interested?</h1>
                        <h1>Let's get in touch!</h1>
                    </div>
                    <div className='contacts-text'>
                        <p>I am currently looking for an <span className='span underline'>internship/
                            graduate scheme</span> to gain some more hands-on experience. I'd love learn 
                            about new opportunities in software engineering and data analysis!</p>
                        <button className='reach-out' onClick={copy_email}>
                            <FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon>
                            <p className='cpy-email'>jhtkbusiness@gmail.com</p>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home