document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent('Project Inquiry from DarkWing Studio Portfolio');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@darkwingstudio.com?subject=${subject}&body=${body}`;
    if (note) {
      note.textContent = 'If the mail client did not open, copy the email and send directly to hello@darkwingstudio.com.';
    }
  });
});