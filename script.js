function submitEmail() {
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput) {
        emailInput.value = 'info@hashihive.com';
        alert('Email submitted to: ' + emailInput.value);
        emailInput.value = ''; // Clear the input after submission
    }
}
