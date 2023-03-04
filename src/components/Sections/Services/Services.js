import { motion } from "framer-motion";
import { ContentServices, ContentAssets, ContentCard } from "./SevicesElements";
export default function Services() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      <div className="container">
        <ContentServices className="row">
          <ContentCard/>
          <ContentAssets/>
        </ContentServices>
      </div>
    </motion.section>
  );
}
