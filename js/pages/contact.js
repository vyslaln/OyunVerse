const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');

contactForm.addEventListener('submit', function(event){
    event.preventDefault();

    const messages = JSON.parse(localStorage.getItem('oyunverseContactMessages')) || [];
    messages.push({
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        subject: document.getElementById('contact-subject').value,
        message: document.getElementById('contact-message').value,
        sentAt: new Date().toISOString()
    });
    localStorage.setItem('oyunverseContactMessages', JSON.stringify(messages));

    contactForm.reset();
    contactForm.querySelector('button[type="submit"]').style.display = 'none';
    contactSuccess.classList.add('active');
});