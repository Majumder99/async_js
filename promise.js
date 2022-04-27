const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is rejected");
  }, 2000);
});

const fullFillProimse = (result) => {
  console.log(result);
  console.log("The promise is fullfilled");
};
const notFullFillProimse = (error) => {
  console.log(error);
  console.log("The promise is not fullfilled");
};

promise1.then(fullFillProimse);
promise2.catch(notFullFillProimse);
