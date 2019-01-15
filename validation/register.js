const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //need empty string for validator thats why we are making sure we get string when it is null
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.name) ? data.email : "";
  data.password = !isEmpty(data.name) ? data.password : "";
  data.password2 = !isEmpty(data.name) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }
  if (Validator.equals(data.password, data.password2)) {
    errors.password = "Password must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
