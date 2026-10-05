import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import FloatingParticles from "./components/FloatingParticles";

import Opening from "./sections/Opening";
import FriendshipUnlock from "./sections/FriendshipUnlock";
import BirthdayReveal from "./sections/BirthdayReveal";
import RishitaWorld from "./sections/RishitaWorld";
import OurLittleCorner from "./sections/OurLittleCorner";
import FutureInvestigation from "./sections/FutureInvestigation";
import EmotionalLetter from "./sections/EmotionalLetter";
import FinalReveal from "./sections/FinalReveal";

import "./App.css";

function App() {
  const [page, setPage] = useState("opening");

  return (
    <main className="site">
      <FloatingParticles />

      <AnimatePresence mode="wait">

        {/* 1. OPENING */}
        {page === "opening" && (
          <Opening
            key="opening"
            onEnter={() => setPage("unlock")}
          />
        )}

        {/* 2. FRIENDSHIP QUESTION */}
        {page === "unlock" && (
          <FriendshipUnlock
            key="unlock"
            onCorrect={() => setPage("birthday")}
          />
        )}

        {/* 3. BIRTHDAY REVEAL */}
        {page === "birthday" && (
          <BirthdayReveal
            key="birthday"
            onContinue={() => setPage("world")}
          />
        )}

        {/* 4. RISHITA'S WORLD */}
        {page === "world" && (
          <RishitaWorld
            key="world"
            onContinue={() => setPage("memories")}
          />
        )}

        {/* 5. OUR LITTLE CORNER */}
        {page === "memories" && (
          <OurLittleCorner
            key="memories"
            onContinue={() => setPage("future")}
          />
        )}

        {/* 6. FUNNY INVESTIGATION */}
        {page === "future" && (
          <FutureInvestigation
            key="future"
            onContinue={() => setPage("letter")}
          />
        )}

        {/* 7. EMOTIONAL LETTER */}
        {page === "letter" && (
          <EmotionalLetter
            key="letter"
            onContinue={() => setPage("final")}
          />
        )}

        {/* 8. FINAL REVEAL */}
        {page === "final" && (
          <FinalReveal key="final" />
        )}

      </AnimatePresence>
    </main>
  );
}

export default App;