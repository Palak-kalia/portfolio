document.addEventListener('click', () => {
    const heroSection = document.querySelector('.hero');
    heroSection.classList.toggle('tapped'); // Add/remove the tapped class
});

// Smooth Scrolling for Navigation Links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Simple Form Validation (if needed on pages like Contact)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (!name || !email) {
            event.preventDefault();
            alert('Please fill out both fields!');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.section-title');
    const subtitle = document.querySelector('.section-subtitle');
    const form = document.querySelector('.form-container');
    const links = document.querySelectorAll('.social-icon');

    // Animate Title
    gsap.fromTo(title, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );

    // Animate Subtitle
    gsap.fromTo(subtitle, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    );

    // Animate Form
    gsap.fromTo(form, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.6 }
    );

    // Animate Social Links
    gsap.fromTo(links, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, stagger: 0.2 }
    );
});
