import Anchor from '../components/Anchor';
import HugeTitle from '../components/HugeTitle';
import TwoColContainer from '../components/TwoColumnContainer';
import CaseStudyWrapper from '../components/CaseStudyWrapper';
import dissertation_demo from "../videos/dissertation-demo.mp4";
import l4s_demo from "../videos/l4s-landing-demo.mp4";
import epidemic_demo from "../videos/epidemic-demo.mp4";

const Home = () => {
    return (
        <div className='homepage'>
            {/* Introduction */}
            <p>Hi, I'm Justin!</p>
            <HugeTitle
                left_col_boundary={1}
                right_col_boundary={5}
                is_transparent={false}>
                I'm a Machine Learning Engineer, Architecting the Future with a Foundation of Data</HugeTitle>
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
                Case Studies & Projects
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
                    vid={epidemic_demo}
                    title={"Simulating an epidemic in a controlled environment"}
                    organisation={"N/A"}
                    url={"https://github.com/jhtkoo0426/Epidemic-Simulation"}
                    url_type={"external"}
                    >
                    {/* TODO: Directly integrate the simulation into portfolio later */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </CaseStudyWrapper>
            </TwoColContainer>

            <TwoColContainer
                left_col_boundary={2}
                right_col_boundary={5}>
                <CaseStudyWrapper
                    id={"case-study3"}
                    project_id={3}
                    vid={l4s_demo}
                    title={"Analysing and Visualising the Performance of UK Schools"}
                    organisation={"Look4SchoolsUK Ltd."}
                    url_type={"internal"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </CaseStudyWrapper>
            </TwoColContainer>
        </div>
    );
}

export default Home