import React from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';

export default function Button(){
   const scrollToTop = () =>{
      window.scrollTo({
         top: 0, 
         behavior: 'smooth'
      });
   };
   return(
      <div>
         <FaArrowCircleUp onClick={scrollToTop}
         />
      </div>
   )
} 
   
