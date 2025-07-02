// Loading Screen Management
const LoadingScreen = {
    hide: () => {
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
            loadingScreen.classList.add("hidden");
            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 500); // Match the transition duration in CSS
        }
    },
};

// Configuration Management
const Config = {
    data: null,
    async load() {
        try {
            const response = await fetch("config.json");
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error("Error loading configuration:", error);
            return null;
        }
    },
    get(path) {
        return path.split(".").reduce((obj, key) => obj?.[key], this.data);
    },
};

// Theme Management
const ThemeManager = {
    getMode: () => localStorage.getItem("theme") || Config.get("theme.mode"),
    
    setMode: (mode) => {
        document.documentElement.setAttribute("data-theme", mode);
        localStorage.setItem("theme", mode);
    },
    
    toggleMode: (checked) => {
        const newMode = checked ? "light" : "dark";
        ThemeManager.setMode(newMode);
        return newMode;
    },
    
    initTheme: () => {
        const mode = ThemeManager.getMode();
        const color = Config.get("theme.color");
        
        document.documentElement.setAttribute("data-theme", mode);
        document.documentElement.setAttribute("data-color", color);
        
        const themeToggle = document.getElementById("theme-toggle");
        if (themeToggle) {
            themeToggle.checked = mode === "light";
            themeToggle.addEventListener("change", (e) =>
                ThemeManager.toggleMode(e.target.checked)
            );
        }
    }
};

// Content Management
const ContentManager = {
    updatePersonalInfo: () => {
        // Update name
        document.querySelector(".title").textContent =
            Config.get("personal.name");

        // Update subtitle
        document.querySelector(".subtitle").textContent =
            Config.get("personal.subtitle");

        // Update about section
        const aboutContent = document.querySelector(".about-content p");
        if (aboutContent) {
            aboutContent.textContent = Config.get("personal.about");
        }

        // Update CV link
        const cvLink = document.querySelector(".cv-button");
        if (cvLink) {
            cvLink.href = Config.get("personal.cvLink");
        }

        // Update contact information
        const contact = Config.get("sections.contact");
        if (contact) {
            const emailLink = document.querySelector('a[href^="mailto"]');
            const whatsappLink = document.querySelector(
                'a[href^="https://wa.me"]'
            );
            const linkedinLink = document.querySelector(
                'a[href*="linkedin.com"]'
            );

            if (emailLink) emailLink.href = `mailto:${contact.email}`;
            if (whatsappLink)
                whatsappLink.href = `https://wa.me/${contact.whatsapp.replace(
                    /[^0-9]/g,
                    ""
                )}`;
            if (linkedinLink) linkedinLink.href = contact.linkedin;
        }
    },
    updateSkills: () => {
        const skillsContainer = document.querySelector(".skills");
        if (skillsContainer && Config.get("sections.hero.skills")) {
            skillsContainer.innerHTML = Config.get("sections.hero.skills")
                .map(
                    (skill) => `
                    <span class="skill-tag">
                        <i class="${skill.icon}"></i> ${skill.name}
                    </span>
                `
                )
                .join("");
        }
    },
    updateTechStack: () => {
        const techStack = Config.get("sections.techStack");
        if (!techStack?.enabled) {
            document.getElementById("tech-stack")?.remove();
            return;
        }

        const techStackIcons = {
            // Languages
            Python: "devicon-python-plain",
            JavaScript: "devicon-javascript-plain",
            TypeScript: "devicon-typescript-plain",
            "C++": "devicon-cplusplus-plain",
            Java: "devicon-java-plain",
            HTML5: "devicon-html5-plain",
            CSS3: "devicon-css3-plain",

            // Frontend
            "React.js": "devicon-react-original",
            "Vue.js": "devicon-vuejs-plain",
            Angular: "devicon-angularjs-plain",
            Tailwind: "devicon-tailwindcss-plain",
            Bootstrap: "devicon-bootstrap-plain",
            Sass: "devicon-sass-original",

            // Backend
            "Node.js": "devicon-nodejs-plain",
            Express: "devicon-express-original",
            Django: "devicon-django-plain",
            Flask: "devicon-flask-original",
            MySQL: "devicon-mysql-plain",
            PostgreSQL: "devicon-postgresql-plain",
            MongoDB: "devicon-mongodb-plain",

            // Tools
            Git: "devicon-git-plain",
            Docker: "devicon-docker-plain",
            "VS Code": "devicon-vscode-plain",
            Webpack: "devicon-webpack-plain",
            NPM: "devicon-npm-original-wordmark",
            Yarn: "devicon-yarn-plain",

            // Cloud & DevOps
            AWS: "devicon-amazonwebservices-original",
            GCP: "devicon-googlecloud-plain",
            Azure: "devicon-azure-plain",
            Heroku: "devicon-heroku-plain",
            Nginx: "devicon-nginx-original",

            // Testing & CI/CD
            Jest: "devicon-jest-plain",
            Jenkins: "devicon-jenkins-plain",
            "Travis CI": "devicon-travis-plain",

            // Design
            Figma: "devicon-figma-plain",
            Photoshop: "devicon-photoshop-plain",
            Illustrator: "devicon-illustrator-plain",
        };

        const techGrid = document.querySelector(".tech-categories");
        if (techGrid && techStack.categories) {
            techGrid.innerHTML = Object.entries(techStack.categories)
                .map(
                    ([_, category]) => `
                    <div class="tech-category">
                        <h3 class="category-title">${category.title}</h3>
                        <div class="tech-grid">
                            ${category.items
                                .map(
                                    (item) => `
                                <div class="tech-card">
                                    <i class="${
                                        item.icon ||
                                        techStackIcons[item.name] ||
                                        "devicon-github-original"
                                    }" title="${item.name}"></i>
                                    <span class="tech-name">${item.name}</span>
                                </div>
                            `
                                )
                                .join("")}
                        </div>
                    </div>
                `
                )
                .join("");
        }
    },
    updateSEO: () => {
        const seo = Config.get("seo");
        if (seo) {
            document.title = seo.title;
            document.querySelector('meta[name="description"]').content =
                seo.description;
            document.querySelector('meta[name="keywords"]').content =
                seo.keywords;
            document.querySelector('meta[name="author"]').content = seo.author;
            document.querySelector('meta[name="theme-color"]').content =
                seo.themeColor;
        }
    },
    toggleSections: () => {
        const sections = Config.get("sections");
        Object.entries(sections).forEach(([sectionName, config]) => {
            if (!config.enabled) {
                document.getElementById(sectionName)?.remove();
                document.querySelector(`a[href="#${sectionName}"]`)?.remove();
            }
        });
    },
};

// Navigation
const Navigation = {
    smoothScroll: (target) => {
        target.scrollIntoView({ behavior: "smooth" });
    },
    initSmoothScroll: () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", (e) => {
                e.preventDefault();
                const target = document.querySelector(
                    anchor.getAttribute("href")
                );
                if (target) Navigation.smoothScroll(target);
            });
        });
    },
};

// Animation
const Animation = {
    initTyping: () => {
        try {
            return new Typed("#typed-text", {
                strings: Config.get("personal.typingTexts"),
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                onError: (err) => {
                    console.error("Typing animation error:", err);
                    document.querySelector("#typed-text").textContent =
                        Config.get("personal.title");
                },
            });
        } catch (error) {
            console.error("Failed to initialize typing animation:", error);
            return null;
        }
    },
    initScrollObserver: () => {
        const observer = new IntersectionObserver((entries) =>
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("show");
            })
        );

        document
            .querySelectorAll(".project-card")
            .forEach((el) => observer.observe(el));
    },
};

// Background Effects
const BackgroundEffects = {
    throttle: (func, limit) => {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    },
    handleMouseMove: (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty("--x", `${x}%`);
        document.documentElement.style.setProperty("--y", `${y}%`);
    },
    initBackgroundEffect: () => {
        const throttledMouseMove = BackgroundEffects.throttle(
            BackgroundEffects.handleMouseMove,
            16
        );
        window.addEventListener("mousemove", throttledMouseMove);

        BackgroundEffects.handleMouseMove({
            clientX: window.innerWidth / 2,
            clientY: window.innerHeight / 2,
        });
    },
};

// Navbar Effects
const NavbarEffects = {
    handleScroll: () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    },
    initNavbarEffects: () => {
        window.addEventListener("scroll", NavbarEffects.handleScroll, {
            passive: true,
        });
    },
};

// Initialize everything when DOM is loaded
const init = async () => {
    // Show loading screen by default (it's already visible in HTML)

    try {
        // Load configuration
        await Config.load();

        // Initialize all components
        ThemeManager.initTheme();
        ContentManager.updatePersonalInfo();
        ContentManager.updateSkills();
        ContentManager.updateTechStack();
        ContentManager.updateSEO();
        ContentManager.toggleSections();
        Navigation.initSmoothScroll();
        Animation.initTyping();
        Animation.initScrollObserver();
        BackgroundEffects.initBackgroundEffect();

        // Hide loading screen after everything is loaded
        LoadingScreen.hide();

        // Initialize scroll effects after loading
        window.addEventListener("scroll", () => {
            NavbarEffects.handleScroll();
        });
    } catch (error) {
        console.error("Initialization error:", error);
        // Still hide loading screen even if there's an error
        LoadingScreen.hide();
    }
};

document.addEventListener("DOMContentLoaded", init);
