import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";

const contactLinks = [
  { icon: Phone, label: "+91 9754420578", href: "tel:+919754420578" },
  { icon: Mail, label: "ashrafshaikhas1147@gmail.com", href: "mailto:ashrafshaikhas1147@gmail.com" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/ashraf-shaikh-49a594220/" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com/Ashraf114" },
];

const Contact = () => {
  const [status, setStatus] = useState<{ msg: string; type: "" | "success" | "error" }>({ msg: "", type: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string).trim();
    const email = (data.get("email") as string).trim();
    const message = (data.get("message") as string).trim();

    if (name.length < 2) { setStatus({ msg: "Please enter a valid name.", type: "error" }); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus({ msg: "Please enter a valid email.", type: "error" }); return; }
    if (message.length < 10) { setStatus({ msg: "Message must be at least 10 characters.", type: "error" }); return; }

    setSending(true);
    setStatus({ msg: "Sending...", type: "" });
    try {
      const res = await fetch("https://formsubmit.co/ajax/ashrafshaikhas1147@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message, _subject: "New Portfolio Contact Message" }),
      });
      if (!res.ok) throw new Error();
      setStatus({ msg: "Message sent successfully!", type: "success" });
      form.reset();
    } catch {
      setStatus({ msg: "Unable to send. Please email me directly.", type: "error" });
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatedSection id="contact">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="space-y-3">
            {contactLinks.map((item, i) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 space-y-4"
        >
          {["name", "email"].map((field) => (
            <div key={field}>
              <label className="text-sm font-medium text-foreground mb-1.5 block capitalize">{field}</label>
              <input
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field === "email" ? "your@email.com" : "Your name"}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
              />
            </div>
          ))}
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
              required
              className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-primary-foreground bg-primary hover:brightness-110 transition-all shadow-lg shadow-primary/25 disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
          </motion.button>
          {status.msg && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm flex items-center gap-2 ${
                status.type === "success" ? "text-primary" : status.type === "error" ? "text-destructive" : "text-muted-foreground"
              }`}
            >
              {status.type === "success" && <CheckCircle2 className="w-4 h-4" />}
              {status.type === "error" && <AlertCircle className="w-4 h-4" />}
              {status.msg}
            </motion.p>
          )}
        </motion.form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
