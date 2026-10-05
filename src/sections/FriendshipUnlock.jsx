import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { friendshipQuestion } from "../data/questions";

export default function FriendshipUnlock({ onCorrect }) {
  const [selected, setSelected] = useState(null);

  const handleAnswer = (option) => {
    setSelected(option);

    if (option.correct) {
      setTimeout(() => {
        onCorrect();
      }, 1800);
    }
  };

  return (
    <motion.section
      className="screen unlock"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="question-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="eyebrow">MEMORY 01</p>

        <h2>
          What was one of the first things
          <br />
          that made Pragya think...
        </h2>

        <p className="question-text">
          "Wait... this girl is actually like us?"
        </p>

        <div className="options">
          {friendshipQuestion.options.map((option, index) => (
            <motion.button
              key={option.id}
              className={`answer ${
                selected?.id === option.id ? "answer-selected" : ""
              }`}
              onClick={() => handleAnswer(option)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + index * 0.12,
              }}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="answer-letter">{option.id}</span>

              <span>{option.text}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selected && !selected.correct && (
            <motion.div
              className="answer-feedback wrong"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p>{selected.response}</p>
              <small>Try again ↓</small>
            </motion.div>
          )}

          {selected?.correct && (
            <motion.div
              className="answer-feedback correct"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>✓ You remembered.</p>
              <small>Unlocking the memory...</small>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}