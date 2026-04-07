import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Award } from "lucide-react";

const Education = () => (
  <AnimatedSection id="education">
    <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8">
      Education & <span className="gradient-text">Certifications</span>
    </h2>
    <div className="grid sm:grid-cols-2 gap-5">
      <motion.div
        whileHover={{ y: -4 }}
        className="glass-card p-6"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-1">VIT Bhopal University</h3>
        <p className="text-sm text-muted-foreground mb-1">Madhya Pradesh</p>
        <p className="text-sm text-muted-foreground">Integrated MTech (AI & ML)</p>
        <p className="text-xs text-primary font-medium mt-2">GPA: 6.27/10</p>
      </motion.div>

      <motion.div
        whileHover={{ y: -4 }}
        className="glass-card p-6"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Award className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-3">Certifications</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Meta Frontend Developer</span> — Coursera
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Google Data Analyst</span> — Coursera
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Education;
