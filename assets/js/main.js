// Simple client-side JS (currently minimal)
// You can add client-side form submission / validation here
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Basic feedback — show alert
      alert('Thank you! Message submitted (demo).');
      form.reset();
    });
  });
});
