import Anchor from '../components/Anchor';
import Container from '../components/Container';
import WorkShowcase from '../components/WorkShowcase';
import SoftwareStack from '../components/SoftwareStack';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import okane from '../media/okane.jpg';
import autofaq from '../media/nn.jpg';


const Home = () => {
    return (
        <div className='homepage'>
            <div className='landing-container' >
                <div className='landing-grid'>
                    <p className='p-large'>Hi! I'm Justin 👋</p>
                    <div className='intro-title'>
                        <h1>an enthusiastic student</h1>
                    </div>
                    <p className='p-large'>pursing a Computer Science degree at <Anchor href={"https://www.ucl.ac.uk"}>UCL</Anchor> with 
                    a burning passion in data analysis and trading</p>
                </div>
            </div>
            <Container id={"intro"}>
                <div className='intro-container'>
                    <ParallaxProvider>
                        <Parallax speed={30}>
                            <div className='skillset'>
                                <p className='p-mid'>Some of my core skills</p>
                                <p className='skill'>data analysis</p>
                                <p className='skill'>systems engineering</p>
                                <p className='skill'>full-stack development</p>
                            </div>
                        </Parallax>
                        <Parallax speed={10}>
                            <p>During university, I worked as a <span className='underline'>part-time business 
                                analyst</span> at Look4SchoolsUK, an education platform. In a span of 2 years, 
                                I developed a webapp prototype for the company, which identified and prevented 
                                loopholes in some of its planned features and web flows.I also helped with ad-hoc 
                                tasks including <span className='underline'>data collection and analysis</span> on
                                UK school data.</p>
                        </Parallax>
                    </ParallaxProvider>
                </div>  
            </Container>
            <Container id={"quote"}>
                <ParallaxProvider>
                    <Parallax speed={30}>
                        <h1 className='h1-small'>“Tell me and I forget, teach me and I may remember, involve me and I learn.”
                            – Benjamin Franklin</h1>
                    </Parallax>
                </ParallaxProvider>
            </Container>
            <Container id={"abt-me"}>
                <div className='abt-me-container'>
                    <ParallaxProvider>
                        <Parallax speed={0}>
                            <p className='p-mid'>Outside of university, I enjoy learning new things 😀</p>
                            <p>At the moment, I'm deep-diving into machine learning and working on a side project 
                                related to <span className='underline'>algorithmic trading</span>. In the future, 
                                I want to pursue a career in the financial market as a quantitative analyst, 
                                and make use of the knowledge and mindset I acquired along my SWE jounrey.</p>
                        </Parallax>
                        <Parallax speed={50}>
                            
                        </Parallax>
                    </ParallaxProvider>
                </div>
            </Container>
            <Container id={"works-intro"}>
                <h1 className='h1-small'>throughout university, I've worked on various projects that I'm
                really proud of</h1>
            </Container>
            <Container id={"works"}>
                <WorkShowcase
                    id={"nlp"}
                    image={autofaq}
                    title={"AutoFAQ"}
                    descr={"Analyse and visualise voice recording data via topic modelling"}
                >
                    <SoftwareStack
                        tools={["NLP", "Gensim", "spaCy", "Python", "Django"]}
                    ></SoftwareStack>
                </WorkShowcase>
                <WorkShowcase
                    id={"okane"}
                    image={okane}
                    title={"Okane"}
                    descr={"Data exploration, Price Forecasting, Fundamental Analysis"}
                    link={"https://github.com/jhtkoo0426/Guiana-Chestnut"}
                    color={"#fff"}
                >
                    <SoftwareStack
                        tools={["keras", "forecasting", "Python"]}
                    ></SoftwareStack>
                </WorkShowcase>
                <WorkShowcase
                    id={"other"}
                    title={"Other projects"}
                    descr={"Discover other projects that I've built so far!"}
                    link={"https://github.com/jhtkoo0426"}
                ></WorkShowcase>
            </Container>
            <Container id={"connect"}>
                <div className='connect-content'>
                    <p className='p-mid'>What's next?</p>
                    <h1 className='h1-mid'>Let's get in touch</h1>
                    <p className='p-mid opport'></p>
                </div>
                <br></br>
                <div className='contact'>
                    <a href="mailto:jhtkbusiness@gmail.com" class="contact-link">Say Hello 👋</a>
                </div>
            </Container>
        </div>
    );
}

export default Home