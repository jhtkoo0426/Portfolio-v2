import Anchor from '../components/Anchor';
import HugeTitle from '../components/HugeTitle';
import TwoColContainer from '../components/TwoColumnContainer';


const Home = () => {
    return (
        <div className='homepage'>
            <p>Hi, I'm Justin!</p>
            <HugeTitle left_col_boundary={1} right_col_boundary={5}>I'm a Freelance Machine Learning Engineer, Your Northstar to Success</HugeTitle>
            <TwoColContainer id={"intro"} left_col_boundary={3} right_col_boundary={5}>
                <p className='text pink'>I help companies to design digital products and turn ideas into a functional
                    and delightful experience. I’m focusing on working on interface and digital
                    design – mainly building products, branding and websites.</p>
            </TwoColContainer>
            <HugeTitle left_col_boundary={1} right_col_boundary={5}>Case Studies & Projects</HugeTitle>
        </div>
    );
}

export default Home