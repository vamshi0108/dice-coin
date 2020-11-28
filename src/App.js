import classes from "./App.module.css";
import "./App.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const parentMotion = {
  hidden: {},
  visible: {},
  hover: {},
  tap: {},
};

const diceVariants = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 360,
    transition: {
      // yoyo: 10,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
    backgroundColor: "white",
  },
  tap: {
    scale: 0.9,
    backgroundColor: "white",
  },
};

const bgdiceVariants = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 360,
    transition: {
      yoyo: Infinity,
      duration: 8,
      ease: "easeInOut",
    },
  },
};

const btnVariants = {
  hidden: {
    x: -400,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    color: "white",
  },
  tap: {
    scale: 0.9,
    color: "white",
  },
};

function App() {
  return (
    <motion.div
      variants={parentMotion}
      initial="hidden"
      animate="visible"
      className={classes.App}
    >
      <motion.div
        variants={bgdiceVariants}
        className={classes.bgdice1}
      ></motion.div>
      <motion.div
        variants={bgdiceVariants}
        className={classes.bgdice2}
      ></motion.div>
      <motion.div
        variants={bgdiceVariants}
        className={classes.bgdice3}
      ></motion.div>
      <motion.div
        variants={bgdiceVariants}
        className={classes.bgdice4}
      ></motion.div>
      {/* <motion.h3 className={classes.logo} animate={{ x: -470, y: -7 }}>
        Welcome to Dice-Coin
      </motion.h3> */}
      <motion.div
        variants={diceVariants}
        whileTap="tap"
        whileHover="hover"
        className={classes.dice}
      ></motion.div>
      <motion.button
        variants={btnVariants}
        whileTap="tap"
        whileHover="hover"
        className={classes.rollBtn}
      >
        Click here
      </motion.button>
    </motion.div>
  );
}

export default App;
