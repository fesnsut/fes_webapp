(function() {
    emailjs.init('YOUR_PUBLIC_KEY');
})();

window.onload = function() {
    const form = document.getElementById('wf-form-Contact-6-Form');
    const successMessage = document.querySelector('.success-message-2');
    const errorMessage = document.querySelector('.error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const submitButton = this.querySelector('input[type="submit"]');
        const originalButtonText = submitButton.value;
        
        submitButton.value = 'Sending...';
        submitButton.disabled = true;

        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        const formData = {
            name: document.getElementById('Contact-6-First-Name').value.trim(),
            email: document.getElementById('Contact-6-Email').value.trim(),
            message: document.getElementById('Contact-6-Message').value.trim()
        };

        if (!formData.name || !formData.email || !formData.message) {
            errorMessage.querySelector('.error-text').textContent = 'Please fill in all fields.';
            errorMessage.style.display = 'block';
            submitButton.value = originalButtonText;
            submitButton.disabled = false;
            return;
        }

        emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'fes@nsut.ac.in'
            }
        ).then(
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
                form.style.display = 'none';  // Hide form after successful submission
                successMessage.style.display = 'block';
                form.reset();
            },
            function(error) {
                console.log('FAILED...', error);
                errorMessage.querySelector('.error-text').textContent = 
                    'Oops! Something went wrong while submitting the form. Please try again later.';
                errorMessage.style.display = 'block';
            }
        ).finally(function() {
            submitButton.value = originalButtonText;
            submitButton.disabled = false;
        });
    });
};