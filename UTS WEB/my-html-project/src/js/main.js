// This file contains JavaScript for interactivity

// Function to display an alert when the contact form is submitted
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for your submission!");
}

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Assuming there's a form in the HTML
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    const colorButton = document.getElementById('colorButton'); // Assuming there's a button with this ID
    if (colorButton) {
        colorButton.addEventListener('click', changeBackgroundColor);
    }
});