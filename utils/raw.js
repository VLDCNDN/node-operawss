const processRequest = require('./process-request')
const request = require('./request')

module.exports = async function () {
  const processedRequest = processRequest(this.body, this.soapAction);
  const response = await request(processedRequest, this.soapAction);
  
  console.log(response.data);

}