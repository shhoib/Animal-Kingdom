import './button.scss'
import { IoIosArrowUp } from "react-icons/io";
import {motion,useAnimation} from 'framer-motion'


const SwipeButton = ({onClick}) => {

    const animateIcon = useAnimation();

    const handleButtonClick=()=>{
        animateIcon.start({y:'-150px'})
        setTimeout(() => {
            animateIcon.start({y:'0'})
        }, 1500);
        onClick();

    }
    return(

        <div className='button-container'>
            <motion.p animate={animateIcon} initial={{y:0}} transition={{duration:1}}><IoIosArrowUp className='up-icon1' /></motion.p>
            <motion.p animate={animateIcon} initial={{y:0}} transition={{duration:1}}><IoIosArrowUp className='up-icon2' /></motion.p>
            <button className='swipe' onClick={handleButtonClick}></button>

        </div>
    )
}


export default SwipeButton