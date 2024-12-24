// Smooth Scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Carousel (Example using a simple JavaScript carousel)
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        if (index === n) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

// Add event listeners for next and previous buttons (if you have them)
// ...

// Hover Effects (Example for buttons)
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#0056b3'; // Change background color on hover
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#007bff'; // Reset background color
    });
});
