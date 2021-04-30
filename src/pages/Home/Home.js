import HeroHeader from '../../Containers/HeroHeader/HeroHeader';
import StorySection from '../../Containers/StorySection/StorySection';
import './Home.css';


const Home = ()=>{
    return(
        <div className='home'>
            <HeroHeader/>
            <StorySection/>
        </div>
    )
}


export default Home;