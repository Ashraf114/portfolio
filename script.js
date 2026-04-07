const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const initialTheme = savedTheme || (prefersLight ? "light" : "dark");

document.documentElement.setAttribute("data-theme", initialTheme);
if (themeToggle) {
    themeToggle.textContent = initialTheme === "light" ? "Dark Mode" : "Light Mode";
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
        themeToggle.textContent = nextTheme === "light" ? "Dark Mode" : "Light Mode";
    });
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const setFormStatus = (message, statusType = "") => {
    if (!formStatus) {
        return;
    }
    formStatus.textContent = message;
    formStatus.classList.remove("success", "error");
    if (statusType) {
        formStatus.classList.add(statusType);
    }
};

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 2) {
            setFormStatus("Please enter a valid name (at least 2 characters).", "error");
            return;
        }
        if (!emailPattern.test(email)) {
            setFormStatus("Please enter a valid email address.", "error");
            return;
        }
        if (message.length < 10) {
            setFormStatus("Please write a message with at least 10 characters.", "error");
            return;
        }

        setFormStatus("Sending message...");

        const payload = {
            name,
            email,
            message,
            _subject: "New Portfolio Contact Message"
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/ashrafshaikhas1147@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Message send failed");
            }

            setFormStatus("Message sent successfully. I will get back to you soon.", "success");
            contactForm.reset();
        } catch (error) {
            setFormStatus("Unable to send right now. Please email me directly.", "error");
        }
    });
}
