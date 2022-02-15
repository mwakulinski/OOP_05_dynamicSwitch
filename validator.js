class Validator {
  static throwIfNotBoolean = (input) => {
    if (typeof input !== "boolean") {
      throw new Error("Condition must be a boolean");
    }
  };

  static throwIfNotFunction = (input) => {
    if (typeof input !== "function") {
      throw new Error("Condition must be a function");
    }
  };
}

module.exports = Validator;
