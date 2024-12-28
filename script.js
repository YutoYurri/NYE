// List of names
const names = ["Max", "Josh", "Naijal", "Peter", "Lilly"];

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const nameDisplay = document.querySelector(".p4_child"); // Target the nested child
  const introAudio = document.getElementById("introAudio"); // Get the intro audio element
  const timelineAudio = document.getElementById("timelineAudio"); // Get the timeline audio element

  if (!nameDisplay) {
    console.error("Element with class '.p4_child' not found.");
    return;
  }

  // Unmute and play the intro audio
  introAudio.muted = false;
  introAudio.play().catch(error => {
    console.error("Intro audio playback failed:", error);
  });

  const iterations = 35; // Number of randomizations
  const delay = 100; // Delay between randomizations in milliseconds
  const startDelay = 15000; // 15 seconds in milliseconds

  // Delay the start of the randomization
  setTimeout(() => {
    let currentIteration = 0;

    // Start the randomization effect
    const randomize = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * names.length); // Random index
      nameDisplay.textContent = names[randomIndex]; // Show random name
      currentIteration++;

      // Stop the randomization and display the final name
      if (currentIteration >= iterations) {
        clearInterval(randomize);
        nameDisplay.textContent = "Lilly"; // Final chosen name
        console.log("Randomization complete. Final name displayed.");
      }
    }, delay);
  }, startDelay);

  // Delay the visibility of the timeline-container and start the timeline audio
  setTimeout(() => {
    const container = document.querySelector('.container');
    const timelineContainer = document.querySelector('.timeline-container');
    if (container && timelineContainer) {
      container.classList.add('hidden'); // Fade out the original content
      setTimeout(() => {
        timelineContainer.style.display = 'block'; // Ensure the timeline container is displayed
        timelineContainer.classList.add('show'); // Fade in the timeline
        console.log("Timeline section is now visible.");
        // Play the timeline background music
        timelineAudio.muted = false;
        timelineAudio.play().then(() => {
          console.log("Timeline audio is playing.");
        }).catch(error => {
          console.error("Timeline audio playback failed:", error);
        });
      }, 1000); // Wait for the fade-out effect to complete
    }
  }, 82000); // 82 seconds
});