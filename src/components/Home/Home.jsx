import { useState } from "react";
import "./Home.scss";
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  const [Index, setIndex] = useState(0);
  const controls = useAnimation();
  const sunControls = useAnimation();

  const handleNextClick = () => {
    controls.start({ scale: 2, opacity: 0, x: "150px" });
    sunControls.start({ scale: 180,opacity:1});
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
      sunControls.start({ scale: 1 ,opacity:0});
    }, 1500);
  };

  return (
    <div className="home">
      <div className="sunbg">
        <motion.div className="sun"></motion.div>
        <motion.div
          initial={{ opacity: 0 }}  animate={{ opacity: 0.8 }}  transition={{ duration: 8 }} className="shadow"
        ></motion.div>
      </div>
      <div className="glarebg">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 8 }} className="glare"
        ></motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={sunControls} transition={{duration:2}} className="animation-circle"></motion.div>

      {Index == 0 && (
        <motion.img
          animate={controls} initial={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
          className="elephantImg" src="africanElephant.png" alt="" />
      )}

      {Index == 1 && (
      <motion.img
      animate={controls} initial={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
       className="deerImg" src="deer1.png" alt="" />
      )}

      {Index == 2 && (
      <motion.img animate={controls} initial={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
       className='birdImg' src="bird1.png" alt="" />
      )}

      <div className="texts">
        <h1>
          The <br /> Elephant <br /> Queen
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab
          nostrum temporibus possimus dolor. Minus ipsam dolore voluptatum
          alias. Nulla quasi ut illo eos asperiores quos, aut minus corrupti at!
        </p>
      </div>
      <div className="notes">
        <p>African elephant</p>
        <hr />
        <p>species left 50</p>
      </div>
      <img className="fog" src="fog4.png" alt="" />
      {/* <motion.img initial={{x:0}} animate={{x:'200%', opacity:1}} transition={{duration:100, repeat:Infinity}} className="fog2" src="fog5.png" alt=""  /> */}
      <button onClick={handleNextClick}>next</button>
    </div>
  );
};

export default Home;
