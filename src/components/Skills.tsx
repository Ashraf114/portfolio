import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  { label: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"], accent: "200 85% 50%" },
  { label: "Backend", skills: ["Node.js", "Express.js", "PHP", "Laravel", "FastAPI", "REST APIs"], accent: "165 80% 42%" },
  { label: "Databases", skills: ["MongoDB", "MySQL"], accent: "35 90% 55%" },
  { label: "Tools", skills: ["Git", "GitHub", "Postman", "XAMPP", "Netlify"], accent: "280 70% 55%" },
];

const Skills = () => (
  <AnimatedSection id="skills">
    <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
      Technical <span className="gradient-text">Skills</span>
    </h2>
    <div className="grid sm:grid-cols-2 gap-6">
      {skillGroups.map((group, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="glass-card p-6"
        >
          <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: `hsl(${group.accent})` }}
            />
            {group.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill, j) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + j * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="text-sm px-3 py-1.5 rounded-lg bg-muted border border-border/50 text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);

export default Skills;
