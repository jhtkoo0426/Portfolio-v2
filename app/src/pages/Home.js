import Anchor from '../components/Anchor';
import Container from '../components/Container';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";


const Home = () => {
    return (
        <div className='homepage'>
            <div className='landing-container' >
                <div className='landing-grid'>
                    <p className='p-large'>Hi! I'm Justin 👋</p>
                    <div className='intro-title'>
                        <h1></h1>
                    </div>
                    <p className='p-large'>I'm a Computer Science student at <Anchor href={"https://www.ucl.ac.uk"}>UCL</Anchor> with 
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
        </div>
    );
}

export default Home