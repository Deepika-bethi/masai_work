let seconds = parseInt(prompt("Enter countdown time (in seconds):"));

let timer = setInterval(() => {
  console.log(seconds);
  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);

setTimeout(() => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "s") {
      clearInterval(timer);
      console.log("Countdown Stopped by User!");
    }
  });
}, 500);
