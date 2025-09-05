let minute = +prompt("Please Enter Minute:");
let second = +prompt("Please Enter Second:");

let timer = setInterval(function () {
  if (second === -1) {
    minute--;
    second = 59;
  }

  if (minute === 0 && second === 0) {
    clearInterval(timer);
    alert("Game Over");
  }
  console.log(`Timer: ${minute}: ${second}`);
  second--;
}, 1000);
