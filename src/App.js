import classes from "./App.module.css";
import "./App.module.css";
import React, { Component } from "react";
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
      yoyo: 7,
      duration: 0.2,
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
    boxShadow: "0px 0px 20px rgb(78, 68, 100, 0.5)",
  },
  tap: {
    scale: 0.9,
    color: "white",
    boxShadow: "0px 0px 20px rgb(78, 68, 100, 0.8)",
  },
};

const diceItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

class App extends Component {
  state = {
    dummyDice: true,
    random: 6,
  };

  trigger = () => {
    this.setState({ dummyDice: !this.state.dummyDice, random: 6 });
  };

  componentDidUpdate() {
    if (!this.state.dummyDice) {
      this.setState({
        dummyDice: !this.state.dummyDice,
      });
      setTimeout(() => {
        this.setState({
          random: Math.floor(Math.random() * Math.floor(6)),
        });
      }, 2000);
    }
  }

  render() {
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
        {this.state.dummyDice && (
          <motion.ul
            variants={diceVariants}
            whileTap="tap"
            whileHover="hover"
            className={classes.dice}
          >
            {[0, 1, 2, 3, 4, 5].slice(this.state.random).map((index) => (
              <motion.li
                key={index}
                className={classes.diceItem}
                variants={diceItemVariants}
              />
            ))}
          </motion.ul>
        )}
        <motion.button
          variants={btnVariants}
          whileTap="tap"
          whileHover="hover"
          className={classes.rollBtn}
          onClick={this.trigger}
        >
          Roll Dice
        </motion.button>
        <motion.p className={classes.copy}>
          &copy; 2020 Vamshi Nagulapally
        </motion.p>
      </motion.div>
    );
  }
}

export default App;
