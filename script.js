// Wrap entire script in DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Form Selection - select form with id="registration-form"
    const form = document.getElementById('registration-form');
    
    // Feedback Division Selection - select div with id="form-feedback"
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting to server
        
        // Retrieve User Inputs - get values and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Initialize Validation Variables
        let isValid = true;
        const messages = [];
        
        // Username Validation - check if length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        
        // Email Validation - check if email includes both '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain both @ and . characters.');
        }
        
        // Password Validation - ensure length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        
        // Feedback Display Logic
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            // Success message
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            // Error messages - join with <br>
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});