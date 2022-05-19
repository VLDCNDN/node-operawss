const axios = require("axios");

module.exports = async function (data, soapAction) {
  
  const config = {
    method: "post",
    url: "http://webcode.me",
    headers: { "User-Agent": "Axios - console app" },
  };

  return await axios(config);
};
