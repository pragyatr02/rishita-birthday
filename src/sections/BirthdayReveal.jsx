import { motion } from "framer-motion";

export default function BirthdayReveal({ onContinue }) {
  return (
    <motion.section
      className="screen birthday"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="memory-paper"
        initial={{
          opacity: 0,
          y: 40,
          rotate: -4,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: -2,
        }}
        transition={{
          delay: 0.4,
          duration: 1,
        }}
      >
        Thursday ko nails nahi kaatna.
        <br />
        Thursday ko baal nahi dhona.
        <br />
        Tongue pe til ho toh jo bolo sach hota hai.
      </motion.div>

      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        THE FIRST REALIZATION
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        Wait...
        <br />
        she's actually one of us.
      </motion.h1>

      <motion.p
        className="reveal-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        And somehow, that random little conversation
        became the beginning of something much bigger.
      </motion.p>

      <motion.div
        className="birthday-heading"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 2.4,
          type: "spring",
          stiffness: 100,
        }}
      >
        <span>Happy Birthday,</span>
        <strong>Rishita ♡</strong>
      </motion.div>

      <motion.button
  className="story-button"
  onClick={onContinue}
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3.2 }}
  whileHover={{
    y: -3,
    scale: 1.03,
  }}
  whileTap={{ scale: 0.97 }}
>
  enter her little world
  <span>↓</span>
</motion.button>
    </motion.section>
  );
}