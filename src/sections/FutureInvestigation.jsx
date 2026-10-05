import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  {
    id: "A",
    text: "Soon™",
    response:
      "Interesting. Very confident answer. The investigation team remains unconvinced. 😭",
  },
  {
    id: "B",
    text: "After I become rich",
    response:
      "Valid. First money, then romance. Financial planning department approves.",
  },
  {
    id: "C",
    text: "When the universe allows it",
    response:
      "The universe has been informed. It has apparently put your request on hold.",
  },
  {
    id: "D",
    text: "Why are you investigating my personal life?",
    response:
      "Because we are your friends. Privacy was never part of the agreement. 😭",
  },
];

export default function FutureInvestigation({ onContinue }) {
  const [selected, setSelected] = useState(null);

  return (
    <motion.section
      className="screen investigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        CLASSIFIED FILE · 07/10/2007
      </motion.p>

      <motion.h1
        className="investigation-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        A Very Serious
        <br />
        Investigation.
      </motion.h1>

      <motion.p
        className="investigation-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Rishita, we need answers.
      </motion.p>

      <motion.div
        className="case-file"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <span className="case-label">CASE FILE #R-2007</span>

        <h2>When are we getting the good news?</h2>

        <p>
          Specifically regarding the mysterious future
          <br />
          <em>better half.</em>
        </p>

        <div className="investigation-options">
          {options.map((option, index) => (
            <motion.button
              key={option.id}
              className="investigation-option"
              onClick={() => setSelected(option)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + index * 0.12 }}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{option.id}</span>
              {option.text}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              className="investigation-response"
              key={selected.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p>{selected.response}</p>

              <small>CASE STATUS: STILL INVESTIGATING</small>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="investigation-stamp"
        initial={{ opacity: 0, rotate: -12, scale: 0.5 }}
        animate={{ opacity: 1, rotate: -8, scale: 1 }}
        transition={{ delay: 2 }}
      >
        CLASSIFIED
      </motion.div>

      <motion.button
        className="story-button"
        onClick={onContinue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        enough investigation → 
      </motion.button>
    </motion.section>
  );
}