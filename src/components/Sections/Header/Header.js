import { motion } from "framer-motion";
import { HeaderContent} from "./headerElements";

export default function Header(params) {
  return (
    /* Animacion de entrada */
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
     <HeaderContent/>
    </motion.section>
  );
}
