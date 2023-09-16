import Anchor from '../components/Anchor';
import HugeTitle from '../components/HugeTitle';
import Container from '../components/Container';
import TwoColContainer from '../components/TwoColumnContainer';
import CaseStudyWrapper from '../components/CaseStudyWrapper';
import dissertation_demo from "../videos/dissertation-demo.mp4";
import l4s_demo from "../videos/l4s-landing-demo.mp4";
import epidemic_demo from "../videos/epidemic-demo.mp4";
import nlp from "../media/nlp.png";

const Home = () => {
    return (
        <div className='homepage'>
            {/* Introduction */}
            <p className='name'>Hi, I'm Justin!</p>
            <HugeTitle
                left_col_boundary={1}
                right_col_boundary={5}
                is_transparent={false}>
                I'm a Data Analyst, Architecting the Future with a Foundation of Data</HugeTitle>
            <TwoColContainer
                id={"intro"}
                left_col_boundary={3}
                right_col_boundary={5}>
                <p className='pink'>I'm a Computer Science graduate with a burning passion in combining 
                my love for statistics and programming to solve business problems and inform better 
                business decision making.</p>
            </TwoColContainer>
            
            {/* Case Studies & Projects Section */}
            <HugeTitle
                left_col_boundary={2}
                right_col_boundary={5}
                is_transparent={false}>
                Featured Projects & Studies
            </HugeTitle>
            <TwoColContainer
                left_col_boundary={2}
                right_col_boundary={5}>
                <CaseStudyWrapper
                    id={"case-study2"}
                    project_id={1}
                    vid={dissertation_demo}
                    title={"Robust Robotic Grapsing Utilising Touch Sensing"}
                    organisation={"Statistical Machine Learning Group UCL"}
                    url={"https://github.com/jhtkoo0426/UCL-FYP/blob/master/docs/Project%20Report/fyp_project_report.pdf"}
                    url_type={"external"}>
                    <p>A study on developing robust machine learning-guided systems for robotic grasping, conducted with the <Anchor href={"https://www.sml-group.cc"} inline={true}>Statistical 
                    Machine Learning Group @ UCL</Anchor>. Addresses common training considerations, such as balancing the trade-off between dataset size 
                    and accuracy.</p>
                </CaseStudyWrapper>
            </TwoColContainer>

            <TwoColContainer
                left_col_boundary={1}
                right_col_boundary={4}>
                <CaseStudyWrapper
                    id={"case-study2"}
                    project_id={2}
                    image={nlp}
                    title={"AutoFAQ - A Text-to-Speech Analysis Tool for NHS Employees"}
                    organisation={"The Apperta CIC Foundation"}
                    url={"http://students.cs.ucl.ac.uk/2021/group17/index.html"}
                    url_type={"external"}
                    >
                    <p>A client-faced team project under the UCL Industry Exchange Network. Focused on improving and optimising an
                        existing project to provide NHS practitioners with non-technical means to analyse voice recordings between doctors
                        and patients.</p>
                </CaseStudyWrapper>
            </TwoColContainer>

            <TwoColContainer
                left_col_boundary={2}
                right_col_boundary={5}>
                <CaseStudyWrapper
                    id={"case-study3"}
                    project_id={3}
                    vid={epidemic_demo}
                    title={"Simulating an epidemic in a controlled environment"}
                    organisation={"Personal Project"}
                    url={"https://github.com/jhtkoo0426/Epidemic-Simulation"}
                    url_type={"external"}
                    >
                    {/* TODO: Directly integrate the simulation into portfolio later */}
                    <p>An interactive web-based simulation that illustrates how the spread of epidemics is influenced by environmental factors 
                        and human behavior, drawing inspiration from <Anchor href={"https://www.youtube.com/watch?v=gxAaO2rsdIs"} inline={true}>
                            3Blue1Brown - Simulating an Epidemic</Anchor>.</p>
                </CaseStudyWrapper>
            </TwoColContainer>

            <TwoColContainer
                left_col_boundary={1}
                right_col_boundary={4}>
                <CaseStudyWrapper
                    id={"case-study4"}
                    project_id={4}
                    vid={l4s_demo}
                    title={"Analysing and Visualising the Performance of UK Schools"}
                    organisation={"Look4SchoolsUK Ltd."}
                    url_type={"internal"}>
                    <p>Evaluated the educational performance of UK schools by considering various metrics, including GCE and GCSE results, 
                        Oxbridge admission statistics, third-party inspection reports, and government-provided school data spreadsheets.</p>
                </CaseStudyWrapper>
            </TwoColContainer>
        </div>
    );
}

export default Home