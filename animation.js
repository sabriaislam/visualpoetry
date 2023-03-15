const delay = 40; // The delay between each character (in milliseconds)
let i = 0;

function typeWriter(text) {
  if (i < text.length) {
    document.getElementById("intro-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text), delay);
  }else{
    // Typewriter animation is done
    setTimeout(() => {
      document.getElementById("author-text").style.display = "block";
    }, 100); // Display after a 1-second delay
  }
}

// Call the function with a new text
typeWriter("I have this strange feeling that I'm not myself anymore. It's hard to put into words, but I guess it's like I was fast asleep, and someone came, disassembled me, and hurriedly put me back together again. That sort of feeling.");