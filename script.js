// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// A little greeting for fellow devs
console.log("%c Welcome to my AI Portfolio! ", "background: #38bdf8; color: #0f172a; font-weight: bold;");

// Simple animation observer for skill cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real scenario, you'd use a service like Formspree or EmailJS here
    alert("Thanks for reaching out! This form is currently a demo, but your message was 'sent' successfully.");
    contactForm.reset();
});

// Add the about section to the scroll observer
const aboutSection = document.querySelector('.about-container');
aboutSection.style.opacity = 0;
aboutSection.style.transform = 'translateY(30px)';
aboutSection.style.transition = 'all 0.8s ease-out';

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

aboutObserver.observe(aboutSection);

window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.hero-content');
    const image = document.querySelector('.hero-image');

    content.style.opacity = '0';
    content.style.transform = 'translateX(-50px)';
    image.style.opacity = '0';
    image.style.transform = 'translateX(50px)';

    setTimeout(() => {
        content.style.transition = 'all 1s ease-out';
        content.style.opacity = '1';
        content.style.transform = 'translateX(0)';

        image.style.transition = 'all 1s ease-out';
        image.style.opacity = '1';
        image.style.transform = 'translateX(0)';
    }, 200);
});