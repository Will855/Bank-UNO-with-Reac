import { motion } from "framer-motion";
import { TeamContent } from "./TeamElements";
export default function Team() {
  return (
    <motion.section
      className="container padding-top-feature"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      <TeamContent />
    </motion.section>
  );
}
