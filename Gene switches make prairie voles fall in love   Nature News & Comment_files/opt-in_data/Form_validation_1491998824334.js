function launchValidation() { var isFormValid = true; function validateEMAIL() { var isControlValid = true;  if (isControlValid) {  isControlValid = validateRequired("container_EMAIL","EMAIL") && isControlValid; } if (isControlValid) {  isControlValid = validateEmail("container_EMAIL","EMAIL") && isControlValid; } return isControlValid; } isFormValid = validateEMAIL() && isFormValid;function validate() { var isControlValid = true;  return isControlValid; } isFormValid = validate() && isFormValid;function validateCOLUMN23() { var isControlValid = true;  return isControlValid; } isFormValid = validateCOLUMN23() && isFormValid; return isFormValid; }