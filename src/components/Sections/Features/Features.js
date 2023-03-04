import { motion } from "framer-motion";
import { FeatureBx } from "./FeaturesElements";

export default function Feature() {
  return (
    /* Animacion de entrada */
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
    <FeatureBx/>
    </motion.section>
  );
}
