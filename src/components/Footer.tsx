import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground"
      >
        &copy; {new Date().getFullYear()} Ashraf Shaikh. All rights reserved.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs text-muted-foreground/60"
      >
        Built with React & Framer Motion
      </motion.p>
    </div>
  </footer>
);

export default Footer;
