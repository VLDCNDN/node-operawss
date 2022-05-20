const { request, processRequest } = require("../../../utils");

module.exports = function () {
  const processedRequest = processRequest(this.body, this.soapAction);
  let resp = {
    "errorMessage" : "",
  }
  // todo: parse to json
  return processedRequest;
}