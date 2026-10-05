import { motion } from "framer-motion";

export default function FinalReveal() {
  return (
    <motion.section
      className="screen final-reveal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="final-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="eyebrow">THE LAST PAGE</p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9,
            duration: 1,
          }}
        >
          And this is
          <br />
          <em>only the beginning.</em>
        </motion.h1>

        <motion.div
          className="final-photo"
          initial={{
            opacity: 0,
            y: 40,
            rotate: -3,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: -2,
          }}
          transition={{
            delay: 1.4,
            duration: 1,
          }}
          whileHover={{
            rotate: 0,
            scale: 1.02,
          }}
        >
          <img
            src="/photos/rishita/final.jpeg"
            alt="Rishita"
          />

          <span>07 · 10 · 2007</span>
        </motion.div>

        <motion.p
          className="final-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 1 }}
        >
          Happy Birthday, Rishita.
          <br />
          Here's to everything you've survived,
          <br />
          everything you've become,
          <br />
          and everything that's still waiting for you.
        </motion.p>

        <motion.div
          className="final-heart"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2.8,
            type: "spring",
            stiffness: 120,
          }}
        >
          ♡
        </motion.div>

        <motion.p
          className="final-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          made with love, memories & a little too much effort.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}