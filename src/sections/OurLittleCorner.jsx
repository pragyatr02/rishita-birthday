import { motion } from "framer-motion";

const memories = [
  {
    image: "/photos/friendship/memory-01.jpeg",
    number: "01",
    title: "The Beginning",
    text: "Two people sitting next to each other in college, not knowing this would become a friendship.",
  },
  {
    image: "/photos/friendship/memory-02.jpeg",
    number: "02",
    title: "Somehow, Us",
    text: "Random conversations slowly became inside jokes, reality checks, and a friendship that just happened.",
  },
  {
    image: "/photos/friendship/memory-03.jpeg",
    number: "03",
    title: "Our Little World",
    text: "And somewhere between all the chaos, we became the kind of friends who just understand.",
  },
];

export default function OurLittleCorner({ onContinue }) {
  return (
    <motion.section
      className="screen memory-vault"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        PRIVATE COLLECTION
      </motion.p>

      <motion.h1
        className="vault-title"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Our little
        <br />
        <em>corner.</em>
      </motion.h1>

      <motion.p
        className="vault-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Not every memory needs a date.
        <br />
        Some just need the right person in them.
      </motion.p>

      <div className="memory-vault-grid">
        {memories.map((memory, index) => (
          <motion.article
            className={`vault-memory vault-memory-${index + 1}`}
            key={memory.number}
            initial={{
              opacity: 0,
              y: 50,
              rotate: index === 1 ? 2 : -2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              rotate: 0,
            }}
          >
            <div className="vault-photo">
              <img src={memory.image} alt={memory.title} />

              <span className="memory-number">
                {memory.number}
              </span>
            </div>

            <div className="vault-caption">
              <h2>{memory.title}</h2>
              <p>{memory.text}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="vault-note"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>note to self</span>

        <p>
          Keep this friendship somewhere safe.
          <br />
          Preferably away from our nonsense.
        </p>
      </motion.div>

      <motion.button
        className="story-button"
        onClick={onContinue}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        open the next file →
      </motion.button>
    </motion.section>
  );
}