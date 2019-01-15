const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //need empty string for validator thats why we are making sure we get string when it is null

  data.email = !isEmpty(data.name) ? data.email : "";
  data.password = !isEmpty(data.name) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
