/**
 * Note: not inserting wsse credential will be considered as local opera, meaning no wsseSecurity in header
 * @param {Object} config - configuration that contains credentials and url's to connect in opera
 * @param {String} config.url - complete url for cloud opera
 * @param {String} config.propertyCode - property code or company code
 * @param {String} [config.chainCode] - property code or company code
 * @param {String} [config.wsseUsername] - wsseUsername This is provided by oracle for requesting in opera cloud
 * @param {String} [config.wssePassword] - wssePassword This is provided by oracle for requesting in opera cloud
 * @param {String} username - username for header UserCredential
 * @param {String} password - password for header UserCredential
 *
 * @returns Object
 */
module.exports = function (config) {
  const wsdl = require("./wsdl");

  if (
    config === undefined ||
    config === null ||
    Object.entries(config).length === 0
  ) {
    return { message: "Please enter config" };
  }

  if (
    (!config.hasOwnProperty("url") && config.url === undefined) ||
    (!config.hasOwnProperty("propertyCode") &&
      config.propertyCode === undefined) ||
    (!config.hasOwnProperty("username") && config.username === undefined) ||
    (!config.hasOwnProperty("password") && config.password === undefined)
  ) {
    return { message: "Please enter required param" };
  }

  global.config = config;

  return wsdl;
};
