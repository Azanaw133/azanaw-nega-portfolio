const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('.form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = [...contactForm.querySelectorAll('input, textarea')];
    const emailField = contactForm.querySelector('#email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidField = fields.find((field) => !field.value.trim() || (field === emailField && !emailPattern.test(field.value.trim())));

    fields.forEach((field) => field.removeAttribute('aria-invalid'));
    if (invalidField) {
      invalidField.setAttribute('aria-invalid', 'true');
      invalidField.focus();
      formStatus.textContent = invalidField === emailField ? 'Please enter a valid email address.' : 'Please complete this field.';
      formStatus.className = 'form-status form-error';
      return;
    }

    const submitButton = contactForm.querySelector('button');
    submitButton.disabled = true;
    submitButton.textContent = 'Message sent ↗';
    formStatus.textContent = 'Thanks. Your message is ready to be followed up.';
    formStatus.className = 'form-status form-success';
    contactForm.reset();
  });
}
