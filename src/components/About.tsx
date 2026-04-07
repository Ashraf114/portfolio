import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Code2, Server, Database } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, responsive UIs" },
  { icon: Server, label: "Backend", desc: "Node.js, Laravel, APIs" },
  { icon: Database, label: "Databases", desc: "MongoDB, MySQL" },
];

const About = () => (
  <AnimatedSection id="about">
    <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8">
      About <span className="gradient-text">Me</span>
    </h2>
    <div className="glass-card p-8 mb-8">
      <p className="text-muted-foreground leading-relaxed text-lg">
        Full-Stack Developer with hands-on experience in backend technologies including
        Node.js, Express.js, MongoDB, MySQL, and Laravel. Skilled in building scalable REST APIs,
        handling server-side logic, and integrating secure data flows with frontend frameworks like React.
        Proven success in delivering end-to-end web applications including real-time systems,
        dashboards, and e-commerce platforms.
      </p>
    </div>
    <div className="grid sm:grid-cols-3 gap-4">
      {highlights.map((h, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ y: -4 }}
          className="glass-card p-5 text-center group cursor-default"
        >
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <h.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-foreground text-sm">{h.label}</h3>
          <p className="text-xs text-muted-foreground mt-1">{h.desc}</p>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);

export default About;
