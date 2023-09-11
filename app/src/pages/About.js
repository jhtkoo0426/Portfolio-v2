import Anchor from '../components/Anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import HugeTitle from '../components/HugeTitle';
import Subtitle from '../components/Subtitle';
import TwoColContainer from '../components/TwoColumnContainer';


const About = () => {
    return (
        <div className='about-page'>
            <p>About & Services</p>
            <HugeTitle>Hello! I'm Justin</HugeTitle>
            <br></br>
            <Subtitle>I'm Justin Koo, an entry-level Machine Learning Engineer/Data Analyst based in London, UK.</Subtitle>
            <p>My experience comes from working with companies to solve problems on their product and help them ship redesign, alpha products or new features. One of my goals during a project is to make sure we are always on the same page by documenting and communicating about the journey.</p>
            <TwoColContainer col1_width={"30%"} col2_width={"50%"}>
                
            </TwoColContainer>
        
        </div>
    );
}

export default About