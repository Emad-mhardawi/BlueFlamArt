import HowWorks from '../../Components/HowItWorks.js/HowWorks';
import HeroHeader from '../../Containers/HeroHeader/HeroHeader';
import StorySection from '../../Containers/StorySection/StorySection';
import './Home.css';


const Home = ()=>{
    return(
        <div className='home'>
            <HeroHeader/>
            <StorySection/>
            <HowWorks/>
        </div>
    )
}


export default Home;