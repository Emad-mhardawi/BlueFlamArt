import React from 'react';
import './StorySection.css';
import Button from '../../Components/Button/Button';


const StorySection = (props)=>{
    return(
       <section className='story-section'>
           <div className='story-section-title'>A little about who we are, and what we do ?</div>
           <div className='story-section-hero-image'></div>
           <div className='story-section-des'>
               <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et
                dolore magna aliquased do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis labore et dolore
                magna aliqua nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.</p>
               <p>Dolor sit amet, consectetur adipiscing elit, labore et dolore magna
                aliquased do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis labore et dolore magna aliqua nostrud exer !!
                </p>
           </div>
           <div className='story-section-button'>
               <Button className='tryit-button'>Try it</Button>
            </div>

           <div className='story-section-small-image1'>1</div>
           <div className='story-section-small-image2'>2</div>
           <div className='story-section-small-image3'>3</div>
           <div className='story-section-small-image4'>4</div>
           <div className='story-section-small-image5'>5</div>
           <div className='story-section-small-image6'>6</div>
       </section>
        
    )
}


export default StorySection;