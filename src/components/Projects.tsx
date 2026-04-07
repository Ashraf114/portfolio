import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    icon: "📊",
    title: "University Dashboard",
    desc: "Interactive dashboard for students and administrators to manage academic data with real-time visualization and authentication.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    outcome: "Improved data handling by 30%",
    accent: "165 80% 40%",
  },
  {
    icon: "🍔",
    title: "Food Delivery App",
    desc: "Responsive food delivery platform connecting customers, vendors, and delivery agents with real-time order tracking.",
    tech: ["React", "Node.js", "MongoDB", "Laravel"],
    outcome: "Improved order processing speed by 25%",
    accent: "25 90% 55%",
  },
  {
    icon: "💬",
    title: "Real-Time Chat Application",
    desc: "Real-time chat with individual and group messaging, media sharing, and online presence indicators.",
    tech: ["Socket.io", "Node.js", "React", "MongoDB"],
    outcome: "Increased user engagement significantly",
    accent: "140 65% 45%",
  },
  {
    icon: "🛒",
    title: "E-commerce Web Application",
    desc: "Fully functional e-commerce platform with product catalogs, shopping cart, and Stripe payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    outcome: "Supported a significant user base at launch",
    accent: "280 70% 55%",
  },
  {
    icon: "💹",
    title: "Personal Finance Tracker",
    desc: "Web application for managing finances, tracking expenses, and visualizing spending habits through interactive charts.",
    tech: ["React", "Chart.js", "Node.js", "SQL"],
    outcome: "Improved financial discipline for users",
    accent: "200 85% 50%",
  },
];

const Projects = () => (
  <AnimatedSection id="projects">
    <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
      Featured <span className="gradient-text">Projects</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="glass-card p-6 group relative overflow-hidden"
        >
          {/* Accent glow on hover */}
          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
            style={{ backgroundColor: `hsl(${proj.accent})` }}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{proj.icon}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {proj.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {proj.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/10">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs font-medium" style={{ color: `hsl(${proj.accent})` }}>
              ✦ {proj.outcome}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);

export default Projects;
