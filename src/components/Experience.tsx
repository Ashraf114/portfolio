import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Easework AI",
    subtitle: "A unit of Eyana Tech Corp.",
    duration: "July 2025 - Present",
    tech: "React, Python, FastAPI, Node.js, MySQL",
    points: [
      "Developed full-stack applications using React with FastAPI and Node.js backend services.",
      "Built secure REST APIs with authentication, validation, and structured error handling.",
      "Optimized MySQL schemas and query performance for better scalability.",
    ],
  },
  {
    company: "Zucol Services Pvt Ltd",
    subtitle: "Full Stack Developer",
    duration: "Apr 2024 - Jul 2025",
    tech: "React, MongoDB, PHP, Laravel, Node.js, FastAPI",
    points: [
      "Built high-impact products including a University Dashboard and Food Delivery App.",
      "Worked on real-time project delivery and cross-team collaboration.",
    ],
  },
  {
    company: "Cyber Elite",
    subtitle: "Full Stack Developer Intern",
    duration: "Nov 2023 - Apr 2024",
    points: [
      "Built dynamic responsive pages and integrated frontend with backend APIs.",
      "Improved application performance and cross-device consistency.",
    ],
  },
  {
    company: "Suvidha Foundation",
    subtitle: "Frontend Developer Intern",
    duration: "Jan 2023 - Feb 2023",
    points: [
      "Developed a responsive kids coding website with improved accessibility and UI.",
    ],
  },
];

const Experience = () => (
  <AnimatedSection id="experience">
    <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
      Work <span className="gradient-text">Experience</span>
    </h2>
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-border hidden sm:block" />

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative sm:pl-14"
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 300 }}
              className="absolute left-2 top-6 w-[22px] h-[22px] rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center hidden sm:flex"
            >
              <Briefcase className="w-2.5 h-2.5 text-primary" />
            </motion.div>

            <div className="glass-card p-6 hover:border-primary/30">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{exp.company}</h3>
                  <p className="text-sm text-primary font-medium">{exp.subtitle}</p>
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border/50">
                  {exp.duration}
                </span>
              </div>
              {exp.tech && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {exp.tech.split(", ").map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Experience;
