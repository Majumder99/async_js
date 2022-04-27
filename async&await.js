function resolveNewHello() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("hello word");
    }, 2000);
  });
}
function resolveNewWorld() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("new word");
    }, 1000);
  });
}

//Squential Execution
// async function sequentialStart() {
//   const hello = await resolveNewHello();
//   console.log(hello);
//   const world = await resolveNewWorld();
//   console.log(world);
// }

// sequentialStart();

//Concurrent Execution
// async function sequentialStart() {
//   const hello = resolveNewHello();
//   const world = resolveNewWorld();
//   console.log(await hello);
//   console.log(await world);
// }

// sequentialStart();

//Parallel Execution
function sequentialStart() {
  Promise.all([
    (async () => console.log(await resolveNewHello()))(),
    (async () => console.log(await resolveNewWorld()))(),
  ]);
}

sequentialStart();
