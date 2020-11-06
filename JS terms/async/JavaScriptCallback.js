"use strict";

//JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: default behavior of moving all declarations to the top of the current scope
// (ex. var, function declaration)
console.log("1");

//asyncronous
//ex. setTimeout(); when set time is over, call callback function
setTimeout();

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

//Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "yilin" && password === "dream") ||
        (id = "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const UserStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
UserStorage.loginUser(
  id,
  password,
  (user) => {
    UserStorage.getRoles(
      user,
      (userWithRole) => {
        alert("Hello ${user.name}, you have a ${user.role} role");
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
