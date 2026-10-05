import { motion } from "framer-motion";

const soloPhotos = [
  "/photos/rishita/rishita-01.jpeg",
  "/photos/rishita/rishita-02.jpeg",
  "/photos/rishita/rishita-03.jpeg",
  "/photos/rishita/rishita-04.jpeg",
  "/photos/rishita/rishita-05.jpeg",
  "/photos/rishita/rishita-06.jpeg",
  "/photos/rishita/rishita-07.jpeg",
  "/photos/rishita/rishita-08.jpeg",
];

export default function RishitaWorld({ onContinue }) {
  return (
    <motion.section
      className="screen rishita-world"
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
        A LITTLE WORLD OF RISHITA
      </motion.p>

      <motion.h1
        className="world-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        A little world
        <br />
        of <em>kindness.</em>
      </motion.h1>

      <motion.p
        className="world-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        For the girl who somehow manages to care for everyone,
        <br />
        give reality checks, bake cakes and still look effortlessly aesthetic.
      </motion.p>

      {/* YOUR EXISTING CHILDHOOD SECTION */}
      <div className="childhood-section">
        <p className="eyebrow">BEFORE ALL OF THIS</p>

        <div className="childhood-grid">
          <motion.div
            className="childhood-photo photo-left"
            initial={{ opacity: 0, y: 30, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ delay: 0.8 }}
          >
            <img
              src="/photos/rishita/childhood-01.jpeg"
              alt="Rishita childhood memory"
            />
          </motion.div>

          <motion.div
            className="childhood-photo photo-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <img
              src="/photos/rishita/childhood-02.jpeg"
              alt="Rishita childhood memory"
            />
          </motion.div>

          <motion.div
            className="childhood-photo photo-right"
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ delay: 1.2 }}
          >
            <img
              src="/photos/rishita/childhood-03.jpeg"
              alt="Rishita childhood memory"
            />
          </motion.div>
        </div>
      </div>

      {/* 8 SOLO PHOTOS */}
      <motion.div
        className="solo-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="eyebrow">THE RISHITA ERA</p>

        <h2>
          And then she
          <br />
          became <em>her.</em>
        </h2>

        <div className="solo-gallery">
          {soloPhotos.map((photo, index) => (
            <motion.div
              className={`solo-photo solo-${index + 1}`}
              key={photo}
              initial={{
                opacity: 0,
                y: 35,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.025,
              }}
            >
              <img src={photo} alt={`Rishita memory ${index + 1}`} />

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="rishita-traits"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span>caring</span>
        <span>soft-hearted</span>
        <span>chai lover</span>
        <span>baker</span>
        <span>reality-check department</span>
      </motion.div>

      <motion.button
        className="story-button"
        onClick={onContinue}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        enter our little corner →
      </motion.button>
    </motion.section>
  );
}