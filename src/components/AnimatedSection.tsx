import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

const AnimatedSection = ({ children, id, className = "" }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`py-24 ${className}`}
  >
    <div className="section-container">{children}</div>
  </motion.section>
);

export default AnimatedSection;
