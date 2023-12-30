import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <svg
        height="35px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          id="Vector"
          d="M5 17H19M5 12H19M5 7H13"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></motion.path>{" "}
      </svg>

      <img src="logo.png" alt="" />

      <div className="all-animals">
        <button>ALL ANIMALS</button>
        <h4>EN</h4>
      </div>
    </div>
  );
};

export default Navbar;
