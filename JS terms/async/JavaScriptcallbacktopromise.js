"use strict";

//Promise is a JavaScript object for asynchronous operation instead of callback function
//state: pending (during executing operation) -> fulfilled(success) or rejected(network problem or fan't find file)
//Producer(promise object) vs Consumer

//1. Producer
//Promise is a class
//as soon as new Promise is created, the executor runs automatically

const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  //syncronous way takes time
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error('no network')); Uncaught error
  }, 2000);
});

//2. Consumers: then, catch, finally
//get value
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //no matter though it fails or succeeds
    //100% execute
    console.log("finally");
  });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  //for server communication
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🐔`), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen}=>🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>🍳`));
  });

// getHen()
//   .then(hen =>getEgg(hen))
//   .then(egg =>cook(egg))
//   .then(meal=>console.log(meal));

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "bread";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
