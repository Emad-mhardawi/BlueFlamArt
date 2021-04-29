import React, {useRef, useState, useEffect} from 'react'
import Button from '../Button/Button';
import './ImageUpload.css';
import image from '../../assets/images/uploadImagePlaceholder.svg' 


const ImageUpload = (props)=>{
    const [file, setFile] = useState()
    const [previewUrl, setPreviewUrl] = useState()
    const [isValid, setIsValid] = useState(false)

    const filePickerRef = useRef();


    useEffect(()=>{
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = ()=> {
            setPreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    },[file])

    const pickImageHandler = ()=>{
        filePickerRef.current.click()
    }

    const pickHandler = (event)=>{
        console.log(event.target.files[0])
       
        if(event.target.files && event.target.files.length ===1){
        const pickedFile = event.target.files[0]
        setFile(pickedFile)
        setIsValid(true)
      }  else{
          setIsValid(false)
      }
      
     
    }

    return(
        <div className='image-upload__container'>
            <input 
                {...props}
                id={props.id}
                ref={filePickerRef}
                style={{display:'none'}}
                type='file'
                accept='.jpg , jpeg, .png'
                onChange={pickHandler}
            />
            <div className={`image-upload ${props.className}`}>
                <div className='image-upload__preview'>
                    <img className='preview-image'
                    src={previewUrl && isValid ? previewUrl :image}
                    alt='Preview image'/>
                </div>
            </div>
            <Button className='image-upload__button' type='button' clicked={pickImageHandler}>Pick Image</Button>
        </div>
    )
}

export default ImageUpload