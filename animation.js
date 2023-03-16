function typeWriter(id) {
  let element = document.getElementById(id);
  let text = element.textContent;
  let length = text.length;
  let i = 0;

  function type() {
    element.innerText = text.substring(0, i++);
    if (i <= length) {
      setTimeout(type, 50);
    } else {
      // Typewriter animation is done
      setTimeout(() => {
        document.getElementById("author-text").style.display = "block";
      }, 100); // Display after a 1-second delay
    }
  }

  type();
}
// Call the function with the intro-text element's ID
typeWriter("intro-text");


