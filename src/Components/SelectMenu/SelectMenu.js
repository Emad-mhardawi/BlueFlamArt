import { useState } from "react";
import "./SelectMenu.css";
import { FaArrowDown } from "react-icons/fa";
const SelectMenu = (props) => {
    

    const changeHandler = (e)=>{
        props.setCategory(e.target.value)
    }
    
    
  return (
    <div className='custom-select'>
      <select value={props.category} onChange={changeHandler}>
        <option  value=''  className='custom-select__option'>All</option>
        <option  value='line art' value='line art' className='custom-select__option'>Line Art</option>
        <option  name='realistic' value='realistic' className='custom-select__option'>Realistic</option>
        <option  name='digital oil' value='digital oil' className='custom-select__option'>Oil</option>
        <option  name='manga style' value='manga style' className='custom-select__option'>Manga Style</option>
        <option  name='line art' value='line art' className='custom-select__option'>Characters Design</option>
      </select>
      <span className='custom-arrow'>
          <FaArrowDown className='arrow-icon'/>
      </span>
    </div>
  );
};

export default SelectMenu;
