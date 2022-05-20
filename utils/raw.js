const processRequest = require('./process-request')
const request = require('./request')

/**
 * @returns {Promise<Object>} this will return a Promise data with  xml  
 */
module.exports = async function () {
  const processedRequest = processRequest(this.body, this.soapAction);
  let resp = {
    "errorMessage": "",
  };

  try{
    const req = await request(processedRequest, this.soapAction);
    resp.data = req.data;
  } catch(error){
    resp.errorMessage = error.response.data;
  }
  
  return resp;

}