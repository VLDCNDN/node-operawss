const { request, processRequest } = require("../../../utils");
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

module.exports = function () {
  const processedRequest = processRequest(this.body, this.soapAction);
  let resp = {
    "errorMessage" : "",
  }
  // todo: parse to json
  const parser = new XMLParser();
  let jObj = parser.parse(processedRequest.body);
  return jObj['soap:Envelope']['soap:Body'];
}