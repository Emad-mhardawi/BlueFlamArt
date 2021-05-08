import Footer from '../../Components/Footer/Footer';
import HowWorks from '../../Components/HowItWorks.js/HowWorks';
import Testimonials from '../../Components/Testimonials/Testimonials';
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
            <Testimonials/>
            <Footer/>
        </div>
    )
}


export default Home;