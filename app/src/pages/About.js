import Anchor from '../components/Anchor';
import Container from '../components/Container';
import HugeTitle from '../components/HugeTitle';
import Subtitle from '../components/Subtitle';
import TwoColContainer from '../components/TwoColumnContainer';
import CaseStudyWrapper from '../components/CaseStudyWrapper';
import epidemic_demo from "../videos/epidemic-demo.mp4";


const About = () => {
    return (
        <div className='aboutpage'>
            <HugeTitle left_col_boundary={1} right_col_boundary={5}>About Me</HugeTitle>
            <Container left_col_boundary={1} right_col_boundary={4}>
                <Subtitle>I'm Justin Koo, a freelance Machine Learning Engineer / Data Analyst 
                    currently based in London, UK.</Subtitle>
                <p>My experience comes from working with multi-disciplinary teams and projects
                    to solve real-life problems through data analytics and computing skills.
                    During projects, I maintain frequent communication bewteen teammates and clients
                    to ensure everyone works on the same page.</p>
            </Container>
            

            {/* Areas of Interest */}
            <HugeTitle left_col_boundary={2} right_col_boundary={5} id={"interests"}>Areas of Interest</HugeTitle>
            <TwoColContainer left_col_boundary={2} right_col_boundary={5}>
                <div className='interests-container'>
                    {/* TODO: Add interests here */}
                </div>
            </TwoColContainer>


            {/* Playground & Exploration */}
            <HugeTitle left_col_boundary={1} right_col_boundary={4} >Playground</HugeTitle>
            <TwoColContainer left_col_boundary={2} right_col_boundary={5}>
                {/* TODO: Create a container grid to hold case studies, e.g. 2*2 or 2*3 */}
                <CaseStudyWrapper
                    id={"case-study3"}
                    project_id={3}
                    vid={epidemic_demo}
                    title={"Simulating an epidemic in a controlled environment"}
                    organisation={"Personal Project"}
                    url={"https://github.com/jhtkoo0426/Epidemic-Simulation"}
                    url_type={"external"}>
                    {/* TODO: Directly integrate the simulation into portfolio later */}
                    <p>An interactive web-based simulation that illustrates how the spread of epidemics is influenced by environmental factors 
                        and human behavior, drawing inspiration from <Anchor href={"https://www.youtube.com/watch?v=gxAaO2rsdIs"} inline={true}>
                            3Blue1Brown - Simulating an Epidemic</Anchor>.</p>
                </CaseStudyWrapper>
            </TwoColContainer>
        </div>
    );
}

export default About