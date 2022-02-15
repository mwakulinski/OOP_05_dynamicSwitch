const Switch = require("./dynamic-switch");

const formChecker = new Switch();
const value = "tes2344254";

formChecker.add(value.length < 5, () => {
  console.error("value is too short");
});

formChecker.add(!value.includes("@"), () => {
  console.error("value is not an email");
});

formChecker.add(value.length < 7, () => {
  console.error("value is too short");
});

console.log(formChecker);
console.log(formChecker.isEmpty());
console.log(formChecker.isValid());
console.log(formChecker.isEmpty());
