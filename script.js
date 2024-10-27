document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});

gsap.from("#services", { duration: 1, opacity: 0, y: 100, ease: "power2.out" });
gsap.from("#events", { duration: 1, opacity: 0, y: 100, ease: "power2.out", delay: 0.5 });
gsap.from("#promotions", { duration: 1, opacity: 0, y: 100, ease: "power2.out", delay: 1 });
gsap.from("#reviews", { duration: 1, opacity: 0, y: 100, ease: "power2.out", delay: 1.5 });

// Get elements
const checkbox = document.getElementById('checkbox'); // The hamburger checkbox
const navLinks = document.querySelectorAll('.nav-links li a'); // All the nav links

// Function to close the navigation and reset the hamburger
function closeNav() {
    checkbox.checked = false; // Uncheck the checkbox (close the nav)
}

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeNav(); // Close the nav on click
    });
});

let backToTopButton = document.getElementById("back-to-top");

// Throttle scroll event to improve performance
let isScrolling = false;
window.addEventListener('scroll', function() {
  if (!isScrolling) {
    window.requestAnimationFrame(function() {
      handleScroll(); // Call the scroll function
      isScrolling = false;
    });
  }
  isScrolling = true;
});

// Handle scroll behavior
function handleScroll() {
  if (window.scrollY > 300) { // Show after 300px scroll
    backToTopButton.classList.add("visible"); // Make button visible
  } else {
    backToTopButton.classList.remove("visible"); // Hide button
  }
}

// Scroll to top function with easing effect
function scrollToTop() {
  let scrollToTopInterval = setInterval(function() {
    let position = window.pageYOffset;

    // Check if the page is already at the top
    if (position <= 0) {
      clearInterval(scrollToTopInterval); // Stop the interval if at top
    } else {
      window.scrollBy(0, -Math.max(10, position / 20)); // Gradually reduce speed as we get closer to the top
    }
  }, 15); // Set an interval to make smooth scrolling more interactive
}
