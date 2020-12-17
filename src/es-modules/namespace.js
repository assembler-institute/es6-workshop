export function trimPassword(password = "") {
  return password.trim();
}

export function encryptPassword(encrypt, password) {
  return encrypt(password);
}
