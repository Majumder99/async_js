function greet(name) {
  console.log(`Hello ${name}`);
}

function setName(callback) {
  const name = "sourav";
  callback(name);
}

setName(greet);
