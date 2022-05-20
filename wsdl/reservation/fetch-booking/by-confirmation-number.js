const { raw } = require("../../../utils");
const toJson = require("./to-json");

const SOAP_ACTION =
  "http://webservices.micros.com/ows/5.1/Reservation.wsdl#FetchBooking";

/**
 *
 * @param {Integer} confirmationNumber
 * @returns {Object}
 */
module.exports = (confirmationNumber) => {
  return {
    soapAction: SOAP_ACTION,
    body: `<FetchBookingRequest xmlns="http://webservices.micros.com/ows/5.1/Reservation.wsdl">
      <ConfirmationNumber type="INTERNAL">${confirmationNumber}</ConfirmationNumber>
    </FetchBookingRequest>`,
    raw,
    toJson,
  };
};
