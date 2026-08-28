// --- Typewriter Effect ---
const textArray = ["Code Hero!", "Web Developer!", "UI Designer!"];
const typingDelay = 100;
const erasingDelay = 80;
const newTextDelay = 1500;
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
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) setTimeout(type, newTextDelay);
});

// --- Dynamic Navbar Shadow ---
// Adds a thick comic drop-shadow to the navbar when you scroll down
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0px 6px 0px #111111';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// --- Smooth Scrolling Fallback ---
// CSS handles most of this, but JS ensures all anchor tags behave correctly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    
    // Only intercept if it's a valid ID on the page
    if(targetId !== "#" && document.querySelector(targetId)) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
