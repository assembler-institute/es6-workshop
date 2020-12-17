import * as utils from "./es-modules/namespace";

function encrypt(string = "") {
  return string.toUpperCase();
}

const encryptedPassword = utils.encryptPassword(encrypt, "my-password-1234");

console.log(encryptedPassword); // => MY-PASSWORD-1234
