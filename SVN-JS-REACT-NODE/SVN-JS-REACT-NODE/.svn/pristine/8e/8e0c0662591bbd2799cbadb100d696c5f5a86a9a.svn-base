export const validateName = (value) => {
  if (value.length > 6) {
    return true;
  }
  return false;
};

export const validateEmail = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    value
  )) {
    return true;
  }
  return false;
};

export const validatePassword = (value) => {
  if (/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{7,}$/.test(value)) {
    return true;
  }
  return false;
}