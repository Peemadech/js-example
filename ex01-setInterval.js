// setInterval
// clearInterval
var i = 0;
var t = setInterval(() => {
  console.log("Hello NodeJS");
  i++;
  if (i === 3) {
    clearInterval(t);
  }
}, 1000);
