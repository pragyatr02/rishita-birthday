import { motion } from "framer-motion";

export default function EmotionalLetter({ onContinue }) {
  return (
    <motion.section
      className="screen emotional-letter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        A LETTER FOR YOU
      </motion.p>

      <motion.div
        className="letter-paper"
        initial={{ opacity: 0, y: 45, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{
          delay: 0.3,
          duration: 1,
        }}
      >
        <p className="letter-greeting">
          Dear Rishita,
        </p>

        <p>
          I don't think we ever planned to become friends.
          We were just two people sitting next to each other
          in college, and somehow a few random conversations
          turned into this.
        </p>

        <p>
          I still remember how I initially thought you were
          going to be this very sophisticated Santa Cruz,
          Mithibai, South Bombay girl with an attitude.
        </p>

        <p>
          And then you started telling us things like
          <em> Thursday ko nails nahi kaatna</em>,
          <em> Thursday ko baal nahi dhona</em>,
          and all those random ghar-ke-bade-log-wale rules.
        </p>

        <p>
          That was probably the moment I realised,
          <strong> "Okay. This girl is actually one of us."</strong>
        </p>

        <div className="letter-divider">♡</div>

        <p>
          But somewhere along the way, I also realised
          something else.
        </p>

        <p>
          You have been through a lot more than people
          probably realise.
        </p>

        <p>
          Family problems. Ups and downs. People you trusted
          turning out to be people you couldn't trust.
          Moments where you had to become stronger simply
          because life didn't really give you another option.
        </p>

        <p>
          And maybe that's why you became the person you are
          today.
        </p>

        <p>
          The person who cares about everyone.
          The person who gives reality checks.
          The person who somehow manages to make people laugh.
          The person who will bake something and bring it
          for everyone.
        </p>

        <p className="letter-highlight">
          You survived things that were supposed to make
          you smaller.
          <br />
          Instead, they made you stronger.
        </p>

        <p>
          And I want you to remember something.
        </p>

        <p className="letter-highlight">
          You are not alone.
        </p>

        <p>
          You don't have to have everything figured out.
          You don't have to always be the strong one.
          And you definitely don't have to pretend that
          everything is okay all the time.
        </p>

        <p>
          There is still so much life left to experience,
          so many things left to learn, and so many versions
          of yourself that you haven't met yet.
        </p>

        <p>
          And I genuinely hope that every version of you
          that comes next gets a little more peace,
          a little more happiness, and a lot more reasons
          to laugh.
        </p>

        <p>
          You've already come this far.
          <br />
          Don't underestimate how much that means.
        </p>

        <p className="letter-ending">
          Keep being you.
          <br />
          Keep caring.
          <br />
          Keep growing.
          <br />
          And please keep giving us your completely
          unnecessary reality checks.
        </p>

        <p className="letter-signature">
          Ghar jaake suti babu. ♡
        </p>
      </motion.div>

      <motion.button
        className="story-button"
        onClick={onContinue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        one last thing →
      </motion.button>
    </motion.section>
  );
}