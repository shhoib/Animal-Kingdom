import './button.scss'
import { IoIosArrowUp } from "react-icons/io";
import {motion,useAnimation} from 'framer-motion'


const SwipeButton = ({ onClick }) => {

    const animateIcon = useAnimation();
    return(

        <div className='button-container'>
            <motion.p initial={{scale:1,y:0}} animate={{scale:1.3,y:'-20px'}} transition={{duration:2,repeat:Infinity}}><IoIosArrowUp className='up-icon1' /></motion.p>
            <motion.p initial={{scale:1,y:0}} animate={{scale:1.3,y:'-20px'}} transition={{duration:2,repeat:Infinity}}><IoIosArrowUp className='up-icon2' /></motion.p>
            <button className='swipe' onClick={onClick}></button>

        </div>
    )
}


export default SwipeButton