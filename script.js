document.addEventListener('DOMContentLoaded', function () {
  const particleContainer = document.querySelector(".particle-container");
  
  for (let i = 0; i < 100; i++) {
    const circleContainer = document.createElement("div");
    circleContainer.classList.add("circle-container");
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circleContainer.appendChild(circle);
    particleContainer.appendChild(circleContainer);
  }

  const texts = ["Learn full-stack, fast", "Join our community", "Start for free today"]; // Array of texts to cycle through
  const heroTitle = document.querySelector(".hero-title");
  let currentTextIndex = 0;
  let isDeleting = false;
  let text = '';
  let charIndex = 0;
  
  function typeText() {
    const typingSpeed = 150; // Milliseconds to wait before typing the next character
    const deletingSpeed = 75; // Milliseconds to wait before deleting the next character
    const pauseEnd = 2000; // Pause at the end of typing each full text
    
    if (isDeleting) {
      // Delete a character
      text = texts[currentTextIndex].substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add a character
      text = texts[currentTextIndex].substring(0, charIndex + 1);
      charIndex++;
    }

    // Update the content of heroTitle
    heroTitle.textContent = text;

    if (!isDeleting && text === texts[currentTextIndex]) {
      // If the full text has been displayed, pause and start deleting
      setTimeout(() => {
        isDeleting = true;
        setTimeout(typeText, deletingSpeed);
      }, pauseEnd);
    } else if (isDeleting && text === '') {
      // If all text has been deleted, move to the next text and start typing
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop back to the first text
      setTimeout(typeText, typingSpeed);
    } else {
      // Continue typing or deleting
      let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeText, currentSpeed);
    }
  }

  // Start the typing effect
  typeText();
});






