import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from '../../Components/Spinner/Spinner'
import './OurWork.css';

const OurWork = ()=>{

    const [previousWork, setPreviousWork] = useState([]);
    const [loading , setLoading] = useState(true);



    useEffect(()=>{
        getPreviousWork()
    },[])

    const getPreviousWork = async ()=>{
        const response = await axios.get('http://localhost:5000/previous-work')
        const previousWork = await response.data
        setPreviousWork(previousWork)
        setLoading(false)
    }

    
    return(
        <div>
            <h3 className='gallery-title'> Some of our work</h3>
            <div className ='gallery-grid-container'>
            {loading && <Spinner/>}
            {previousWork.map((item)=>(
                <div key={item._id} className='gallery-grid__image-box'>
                <div className='gallery-item'>
                <div className='gallery-grid__image-box'>
                    <img className='gallery-grid__image' src={item.imageUrl}/>
                 </div>
                <div className='gallery-grid__image-overlay'>
                    <p className='gallery-grid__image-madeBy'>made by: {item.madeBy}</p>
                </div>
                </div>
            </div>
            ))}


                



               
        
                
                

            </div>
        </div>
    )
}

export default OurWork