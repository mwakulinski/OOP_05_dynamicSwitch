const Validator = require("./validator");

class Switch {
  constructor() {
    this.conditions = [];
  }

  add(condition, callback) {
    Validator.throwIfNotBoolean(condition);
    Validator.throwIfNotFunction(callback);
    this.conditions.push([condition, callback]);
  }

  isEmpty() {
    if (this.conditions.length === 0) {
      return true;
    }
    return false;
  }

  isValid() {
    const findValidCondition = this.conditions.find(
      ([condition, callback]) => condition === true
    );
    this.clearConditionsAndCallbacks();

    if (findValidCondition) {
      const callback = findValidCondition[1];
      callback();
      return false;
    }

    return true;
  }

  clearConditionsAndCallbacks() {
    this.conditions.length = 0;
  }
}

module.exports = Switch;
