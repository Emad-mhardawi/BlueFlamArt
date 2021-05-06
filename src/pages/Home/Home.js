import HowWorks from '../../Components/HowItWorks.js/HowWorks';
import GridLayout from '../../Containers/gridLayout/GridLayout';
import HeroHeader from '../../Containers/HeroHeader/HeroHeader';
import StorySection from '../../Containers/StorySection/StorySection';
import './Home.css';


const Home = ()=>{
    return(
        <div className='home'>
            <HeroHeader/>
            <StorySection/>
            <HowWorks/>
            <GridLayout/>
        </div>
    )
}


export default Home;