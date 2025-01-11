(function() {
    emailjs.init("T7T2edJXw6m31nRtl");
})();

window.onload = function() {
    // Disable Webflow's default form handling
    Webflow.push(function() {
        $('#wf-form-Contact-6-Form').submit(function(e) {
            e.preventDefault();
        });
    });

    const form = document.getElementById("wf-form-Contact-6-Form");
    const successMessage = document.querySelector(".success-message-2");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const submitButton = this.querySelector('input[type="submit"]');
        const originalButtonText = submitButton.value;

        // Disable the submit button and show loading state
        submitButton.value = "Sending...";
        submitButton.disabled = true;

        // Hide any existing messages
        successMessage.style.display = "none";
        errorMessage.style.display = "none";

        // Get form data
        const formData = {
            name: document.getElementById("Contact-6-First-Name").value.trim(),
            email: document.getElementById("Contact-6-Email").value.trim(),
            message: document.getElementById("Contact-6-Message").value.trim(),
        };

        // Validate form data
        if (!formData.name || !formData.email || !formData.message) {
            errorMessage.querySelector(".error-text").textContent = "Please fill in all fields.";
            errorMessage.style.display = "block";
            submitButton.value = originalButtonText;
            submitButton.disabled = false;
            return;
        }

        try {
            const response = await emailjs.send(
                "service_5s770tj",
                "template_94wuhlj",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                }
            );

            console.log("SUCCESS!", response.status, response.text);
            
            // Show success message using Webflow's classes
            form.style.display = "none";
            successMessage.classList.add("w-form-done");
            successMessage.style.display = "block";
            form.reset();
        } catch (error) {
            console.error("FAILED...", error);
            
            // Show error message using Webflow's classes
            errorMessage.classList.add("w-form-fail");
            errorMessage.style.display = "block";
            errorMessage.querySelector(".error-text").textContent = 
                "Oops! Something went wrong while submitting the form. Please try again later.";
        } finally {
            submitButton.value = originalButtonText;
            submitButton.disabled = false;
        }
    });
};