import {React,useRef,useEffect}from 'react'

import { motion,useScroll } from "framer-motion";


function Intro() {


    
  return (
   <>

<div className="stl">
 
<motion.svg initial={{opacity:0}} transition={{duration:5}} animate={{opacity:1}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob '>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#6A0DAD"/>
  <stop offset="50%" stop-color="#6A0DAD"/>
  <stop offset="50%" stop-color="#1E90FF"/>
  <stop offset="75%" stop-color="#6A0DAD"/>
  <stop offset="100%" stop-color="#1E90FF"/>

    </linearGradient>
  </defs>
		<path fill="url(#gradient)" d="M58.1,-35.1C69.5,-13.9,68.7,12.7,57,34.3C45.3,55.9,22.7,72.5,3.2,70.6C-16.2,68.7,-32.4,48.4,-41.7,28.2C-51,7.9,-53.5,-12.2,-45.4,-31.5C-37.3,-50.9,-18.6,-69.4,2.4,-70.8C23.4,-72.2,46.8,-56.3,58.1,-35.1Z" transform="translate(100 100)">
			<animate attributeName="d" dur="4s" repeatCount="indefinite" values="
				M58.1,-35.1C69.5,-13.9,68.7,12.7,57,34.3C45.3,55.9,22.7,72.5,3.2,70.6C-16.2,68.7,-32.4,48.4,-41.7,28.2C-51,7.9,-53.5,-12.2,-45.4,-31.5C-37.3,-50.9,-18.6,-69.4,2.4,-70.8C23.4,-72.2,46.8,-56.3,58.1,-35.1Z;
				M45.3,-23.1C58.8,-2.7,70.1,22.1,62.1,37.7C54.2,53.3,27.1,59.6,3,57.9C-21.1,56.1,-42.2,46.3,-50,30.9C-57.8,15.4,-52.3,-5.8,-41.7,-24.5C-31.2,-43.2,-15.6,-59.5,0.1,-59.5C15.9,-59.6,31.7,-43.5,45.3,-23.1Z;
				M53.8,-33.4C64.6,-12.2,64.9,12.7,54.1,26.1C43.4,39.6,21.7,41.6,1.6,40.7C-18.6,39.8,-37.1,36,-42.7,25.5C-48.3,15,-41,-2.2,-31.7,-22.5C-22.4,-42.8,-11.2,-66.2,5.1,-69.2C21.5,-72.1,42.9,-54.6,53.8,-33.4Z;
        M41.4,-22C48.5,-11.7,45.4,6.4,36.9,18.8C28.3,31.2,14.1,37.9,-6.6,41.7C-27.3,45.5,-54.7,46.4,-68.7,30.9C-82.8,15.4,-83.5,-16.6,-69.8,-30.8C-56.2,-45,-28.1,-41.3,-5.5,-38.2C17.2,-35,34.3,-32.4,41.4,-22Z;
        M58.1,-35.1C69.5,-13.9,68.7,12.7,57,34.3C45.3,55.9,22.7,72.5,3.2,70.6C-16.2,68.7,-32.4,48.4,-41.7,28.2C-51,7.9,-53.5,-12.2,-45.4,-31.5C-37.3,-50.9,-18.6,-69.4,2.4,-70.8C23.4,-72.2,46.8,-56.3,58.1,-35.1Z;"
			></animate></path></motion.svg>



  <div  className=''>
  <motion.h1 initial={{y:-400}} transition={{duration:0.5}} animate={{ y: -70 }}   class="title">PriceGenie</motion.h1>
  <motion.h1 initial={{opacity:0}} transition={{duration:0.7}} animate={{ opacity: 1 }} className="caption" >Drive smarter. <br /> Predict better.</motion.h1>
  <motion.h1 initial={{opacity:0}} transition={{duration:0.7}} animate={{ opacity: 1 }} className="caption btn" >Get Price </motion.h1>

     </div>
    
</div>


   </>
  )
}

export default Intro