import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] floating" />
        <div className="absolute bottom-1/3 left-1/6 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] floating-slow" />
        <div className="absolute top-1/2 right-1/6 w-[200px] h-[200px] rounded-full bg-accent/10 blur-[80px] floating" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="section-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary font-medium text-xs uppercase tracking-[2px]">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Hi, I'm{" "}
            <span className="gradient-text relative">
              Ashraf Shaikh
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-primary/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{ originX: 0 }}
              />
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground"
            >
              Full-Stack Developer
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl"
          >
            I build end-to-end products with strong UX and reliable backend systems.
            Experienced in Node.js, Express.js, MongoDB, MySQL, Laravel, and React —
            delivering secure APIs, responsive interfaces, and production-ready solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-primary-foreground bg-primary hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/25 glow-border"
            >
              View Projects
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            >
              Hire Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap items-center gap-5 text-muted-foreground"
          >
            {[
              { icon: Phone, label: "+91 9754420578", href: "tel:+919754420578" },
              { icon: Mail, label: "ashrafshaikhas1147@gmail.com", href: "mailto:ashrafshaikhas1147@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ashraf-shaikh-49a594220/" },
              { icon: Github, label: "GitHub", href: "https://github.com/Ashraf114" },
            ].map((item) => (
              <motion.a
                key={item.label}
                whileHover={{ y: -2, color: "hsl(var(--primary))" }}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" /> {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
