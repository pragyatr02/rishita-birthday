import { motion } from "framer-motion";

const particles = Array.from({ length: 24 });

export default function FloatingParticles() {
  return (
    <div className="particles" aria-hidden="true">
      {particles.map((_, index) => {
        const size = 2 + Math.random() * 5;

        return (
          <motion.span
            key={index}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: size,
              height: size,
            }}
            initial={{
              opacity: 0,
              y: "110vh",
            }}
            animate={{
              opacity: [0, 0.35, 0],
              y: "-10vh",
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              delay: Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}