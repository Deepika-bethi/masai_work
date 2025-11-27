// Start loading
const intervalId = setInterval(() => {
  console.log("Loading...");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Loaded successfully!");
}, 5000);

