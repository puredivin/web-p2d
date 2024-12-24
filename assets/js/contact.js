const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send data to Firebase (using Firebase Cloud Functions)
    // ... (Code to send data to Firebase)

    // Display success message or handle errors
    // ...
});
