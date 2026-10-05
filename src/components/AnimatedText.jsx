import { motion } from "framer-motion";

export default function AnimatedText({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}