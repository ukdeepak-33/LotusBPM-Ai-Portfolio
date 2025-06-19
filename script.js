AOS.init({
  duration: 800,
  once: true
});

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Message sent! (You can connect this to Formspree or Netlify Forms)");
});
