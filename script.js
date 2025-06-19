
AOS.init({
  duration: 800,
  once: true
});

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Message sent! (Connect this to Formspree or Netlify)");
});
