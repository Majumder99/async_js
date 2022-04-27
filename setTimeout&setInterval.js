function greet() {
  console.log("hello");
}
// setTimeout(greet, 2000); // Run only once after 2sec
setInterval(greet, 2000); // Run everytime after 2sec
