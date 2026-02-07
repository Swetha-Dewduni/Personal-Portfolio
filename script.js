document.addEventListener('DOMContentLoaded', () => {
    // --- 1. TYPING EFFECT ---
    const textElement = document.getElementById("typing-text");
    const nameStr = "Swetha Dewduni";
    let index = 0;

    function typeEffect() {
        if (textElement && index < nameStr.length) {
            textElement.textContent += nameStr.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    if (textElement) {
        textElement.textContent = ""; 
        typeEffect();
    }

    // --- 2. HERO ENTRANCE ANIMATION ---
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent && heroImage) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(-50px)';
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(50px)';

        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';

            heroImage.style.transition = 'all 1s ease-out';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 200);
    }

    // --- 3. GLOBAL REVEAL ANIMATION (Skills, Projects, & Contact) ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.15 });

    // This selects all cards and the contact area to animate them as you scroll
    const elementsToReveal = document.querySelectorAll('.skill-card, .project-card, .contact-container');

    elementsToReveal.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        revealObserver.observe(el);
    });

    // --- 4. SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- 5. CONTACT FORM ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thanks for reaching out, Swetha! Your message was sent successfully.");
            contactForm.reset();
        });
    }

    console.log("%c AI Portfolio Loaded Successfully ", "background: #38bdf8; color: #0f172a; font-weight: bold;");
});