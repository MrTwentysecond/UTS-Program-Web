// JavaScript for contact form submission alert
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Terima kasih, pesan Anda telah terkirim!');
});

// JavaScript for changing background color or text color
const changeColorButton = document.createElement('button');
changeColorButton.textContent = 'Ubah Warna';
document.body.appendChild(changeColorButton);
changeColorButton.addEventListener('click', function() {
    const currentColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentColor === 'lightblue' ? 'white' : 'lightblue';
    document.body.style.color = currentColor === 'lightblue' ? 'black' : 'white'; // Change text color
});

// Display current date and time in the footer
setInterval(() => {
    const now = new Date();
    document.getElementById('currentDateTime').textContent = now.toLocaleString();
}, 1000);
