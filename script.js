// --- 1. Typewriter Effect for Hero Section ---
const textArray = ["Software Developer.", "Tech Enthusiast.", "Creative Coder."];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const typewriterElement = document.getElementById("typewriter");

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typewriterElement.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

// Start the typing effect when the DOM loads
document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// --- 2. Change Navbar styling on scroll ---
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
