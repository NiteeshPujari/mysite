
// Intersection Observer for Progress Bars
const skillMeters = document.querySelectorAll('.skill-meter');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            progressBar.style.setProperty('--progress-width', progressBar.dataset.width + '%');
            progressBar.classList.add('animate-progress');
        }
    });
});

skillMeters.forEach(meter => {
    progressObserver.observe(meter);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Particle.js initialization (as before)
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: '#3b82f6',
        shape: 'circle',
        opacity: 0.5,
        size: { value: 3 },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Glow effect for cards (as before)
document.querySelectorAll('.glow-effect').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty('--x', `${e.clientX - rect.left}px`);
        element.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});