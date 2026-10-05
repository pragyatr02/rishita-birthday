import { motion } from "framer-motion";
import { rishita } from "../data/rishita";

export default function Opening({ onEnter }) {
  return (
    <motion.section
      className="screen opening"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="date"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {rishita.birthday}
      </motion.div>

      <motion.p
        className="date-caption"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        the day Rishita entered the world
      </motion.p>

      <motion.div
        className="decorative-flower flower-one"
        animate={{
          rotate: [0, 8, -8, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✿
      </motion.div>

      <motion.div
        className="decorative-flower flower-two"
        animate={{
          rotate: [0, -8, 8, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ❀
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        Before we begin...
      </motion.h1>

      <motion.p
        className="opening-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        there's something you need to remember.
      </motion.p>

      <motion.button
        className="primary-button"
        onClick={onEnter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        whileHover={{
          scale: 1.04,
          letterSpacing: "0.04em",
        }}
        whileTap={{ scale: 0.96 }}
      >
        Enter Rishita's World
        <span>→</span>
      </motion.button>
    </motion.section>
  );
}