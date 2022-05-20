const axios = require("axios");

module.exports = function (data, soapAction) {
  const url =
    "https://ha01-test-ssd-osb.oracleindustry.com/OPERAOSB/OPERA_OWS/OWS_WS_51/Reservation";
  var config = {
    headers: {
      "Content-Type": "text/xml",
      SOAPAction:
        "http://webservices.micros.com/ows/5.1/Reservation.wsdl#FetchBooking",
    },
  };

  const result = axios.post(url, data.body, config);

  return result;
};
