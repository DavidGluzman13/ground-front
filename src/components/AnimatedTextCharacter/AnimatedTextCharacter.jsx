import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text }) => {
  const letters = Array.from(text);
  console.log(letters);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 1.26 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overgflow: "hidden",
        display: "flex",
        flexDirection: "row",
      }}
      className="big"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.h1
          variants={child}
          style={{ color: "#ffffff", fontSize: "3rem", fonFamily: "serif" }}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
