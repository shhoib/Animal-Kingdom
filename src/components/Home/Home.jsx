import { useState } from "react";
import "./Home.scss";
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  const [Index, setIndex] = useState(0);
  const controls = useAnimation();
  const sunControls = useAnimation();
  const textControls = useAnimation();

  const handleNextClick = () => {
    controls.start({ scale: 2, opacity: 0, x: "500px" });
    textControls.start({ x: "-900px", scale:2 });
    sunControls.start({ scale: 250,opacity:1});

    setTimeout(()=>{
      sunControls.start({ scale: 1 ,opacity:0});
      textControls.start({x:0, scale:1})
    },1000)
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1800);
  };

  const data = [
    { sunColor : `rgb(255, 136, 24)`, 
    name: 'African Elephant',
    left: '48',
    text : 'The  Elephant  Queen',
    details:'The African elephant, scientifically known as Loxodonta africana, is the largest land animal on Earth and a keystone species in its habitat. These majestic creatures are characterized by their large ears'
    },
    { sunColor : 'orange',  
    name: 'Deer',
    left: '178',
    text : 'What the  deer are  telling us',
    details:'The deer is a widely distributed and diverse family of ruminant mammals, belonging to the Cervidae family. There are numerous species of deer, with variations in size, antler structure, and habitat preferences. '
    },
    { sunColor : 'red', 
    name:'Kingfisher',
    left: '354',
    text : ' A master  Fisherman' ,
    details:'The kingfisher is a fascinating family of birds known for their striking colors, distinctive hunting techniques, and widespread distribution across the globe. Belonging to the Alcedinidae family, these small to medium-sized birds are characterized by their vibrant plumage, often featuring shades of blue, green, and orange'
    },
  ]

  return (
    <div className="home">
      <div className="sunbg">
        <motion.div className="sun" style={{backgroundColor: data[Index].sunColor}} transition={{delay:5}}></motion.div>
        <motion.div
          initial={{ opacity: 0 }}  animate={{ opacity: 0.8 }}  transition={{ duration: 8 }} className="shadow"
        ></motion.div>
      </div>
      <div className="glarebg">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 8 }} className="glare"
        ></motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={sunControls}  transition={{duration:.9,delay:.5}} className="animation-circle" style={{border: `1px solid ${data[Index].sunColor}` }}></motion.div>

      {Index == 0 && (
        <motion.img
          animate={controls} initial={{scale: 1,opacity:0 }} whileInView={{opacity:1}} exit={{ opacity: 0 }} transition={{ duration: .9,ease:"backIn" }}
          className="elephantImg" src="africanElephant.png" alt="" />
      )}

      {Index == 1 && (
      <motion.img
      animate={controls} initial={{  scale: 1,opacity:0 }} whileInView={{opacity:1}} exit={{ opacity: 0 }} transition={{ duration: .9,ease:"backIn" }}
       className="deerImg" src="deer1.png" alt="" />
      )}

      {Index == 2 && (
      <motion.img animate={controls} initial={{  scale: 1,opacity:0 }} whileInView={{opacity:1}} exit={{ opacity: 0 }} transition={{ duration: .9,ease:"backIn" }}
       className='birdImg' src="bird2.png" alt="" />
      )}

      <div className="texts">
        <motion.h1 key={data[Index].text} animate={textControls} whileInView={{opacity:1}} initial={{scale: 1,opacity:0}}  exit={{ opacity: 0 }} transition={{ duration: .9,ease:"backIn" }}>
          {data[Index].text}
        </motion.h1>
        <motion.p animate={textControls} initial={{scale: 1,opacity:0}} whileInView={{opacity:1}}  exit={{ opacity: 0 }} transition={{ duration: .9,ease:"backIn" }}>
        {data[Index].details}
        </motion.p>
      </div>
      <div className="notes">
        <p>{data[Index].name}</p>
        <hr />
        <p>species left {data[Index].left}</p>
      </div>
      <img className="fog" src="fog4.png" alt="" />
      {/* <motion.img initial={{x:0}} animate={{x:'200%', opacity:1}} transition={{duration:100, repeat:Infinity}} className="fog2" src="fog5.png" alt=""  /> */}
      <button onClick={handleNextClick}>next</button>
    </div>
  );
};

export default Home;
