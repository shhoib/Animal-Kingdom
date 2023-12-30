import { useState } from "react"
import './test.scss'
import {motion} from 'framer-motion'

const Test = () => {

    const[index,setIndex] = useState(0)

 
    const changeIT=()=>{
        setIndex((prevIndex) => (prevIndex + 1) % 3)
    }
  return (
    <div className="test">
        {index==0 &&
        <div className="first">
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:3}}>first</motion.h2>
        </div>
        }
        {index==1 &&
        <div style={{ display: index === 1 ? 'block' : 'none' }} className="second">
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:5}}>second</motion.h2>
        </div>
        }
        {index==2 &&
        <div style={{ display: index === 2 ? 'block' : 'none' }} className="third">
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:5}}>third</motion.h2>
        </div>
        }
        <button onClick={changeIT}>chnage</button>
    </div>
  )
}

export default Test