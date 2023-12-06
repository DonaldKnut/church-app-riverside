const textElement = document.querySelector(".hero__headline");
const textContent = textElement.textContent;
textElement.innerHTML = "";

function typeWriterEffect() {
  let charIndex = 0;
  const timer = setInterval(() => {
    const currentChar = textContent[charIndex];
    textElement.innerHTML += currentChar;

    // Display <br> after the word "Victory"
    if (currentChar === "y") {
      textElement.innerHTML += "<br />";
    }

    // Display <span> after the word "International"
    if (currentChar === "l") {
      textElement.innerHTML += "<span> Ministry</span>";
    }

    charIndex++;
    if (charIndex === textContent.length) {
      clearInterval(timer);
    }
  }, 100); // Adjust the speed of typing by changing the interval (in milliseconds)
}

// Call the typewriter effect when the window has finished loading
window.addEventListener("load", typeWriterEffect);
