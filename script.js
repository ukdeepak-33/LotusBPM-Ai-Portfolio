AOS.init({
  duration: 800, // Animation duration
  once: true     // Whether animation should happen only once - true for the example style
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target element
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Calculate offset to account for sticky header
      const headerOffset = 80; // Approximate height of your sticky header
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});


// Counter animation (for the .count elements)
const counters = document.querySelectorAll('.count');
const speed = 200; // The lower the speed, the faster the count

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let current = 0;

  const updateCount = () => {
    const increment = target / speed;
    if (current < target) {
      current += increment;
      counter.innerText = Math.ceil(current);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
};

// Intersection Observer to trigger counters when visible
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counterBoxes = entry.target.querySelectorAll('.count');
      counterBoxes.forEach(counter => animateCounter(counter));
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the element is visible
});

const countersSection = document.getElementById('counters');
if (countersSection) {
  counterObserver.observe(countersSection);
}


// Basic Contact Form Submission (already there, just reiterating)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Message sent! (Note: This is a placeholder. For real functionality, connect this form to a backend service like Formspree.io or Netlify Forms)");
  // You would typically send form data to a server here
  // e.g., fetch('/submit-form', { method: 'POST', body: new FormData(e.target) });
});
