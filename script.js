document.addEventListener('DOMContentLoaded', () => {

    // ======== 1. Typing Effect (FIXED) ========
    const typingText = document.getElementById('typing-text');
    
    // Removed "a " from each string
    const texts = [
        "Computer Engineer.",
        "Developer.",
        "Blockchain Enthusiast."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        let displayText = '';

        if (isDeleting) {
            displayText = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        typingText.textContent = displayText;

        let typeSpeed = isDeleting ? 75 : 150;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    
    type();

    // ======== 2. Scroll Reveal Animation (Simplified) ========
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class for fade-in
                entry.target.classList.add('visible');
                
                // Optional: Stop observing after it's visible
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});