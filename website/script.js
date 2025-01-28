// Typing Animation
const typed = new Typed('#typed-text', {
    strings: [
        'Python Developer 🐍',
        'AI Enthusiast 🤖',
        'Prompt Engineer ⚡',
        'Web Developer 🌐'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'light';

// Theme switch handler
themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add transition class
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.project-card').forEach((el) => observer.observe(el));

// Background Animation
const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--x', `${x}%`);
    document.documentElement.style.setProperty('--y', `${y}%`);
};

// Throttle the mouse move event for better performance
let timeout;
window.addEventListener('mousemove', (e) => {
    if (timeout) return;
    timeout = setTimeout(() => {
        handleMouseMove(e);
        timeout = null;
    }, 16); // Approximately 60fps
});

// Initialize background position
handleMouseMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
