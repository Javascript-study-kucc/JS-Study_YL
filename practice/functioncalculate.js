//command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw Error("cannot calculate");
  }
}
