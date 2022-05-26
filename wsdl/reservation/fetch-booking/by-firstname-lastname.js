const { raw } = require("../../../utils");
const toJson = require("./to-json");

const SOAP_ACTION =
  "http://webservices.micros.com/ows/5.1/Reservation.wsdl#FutureBookingSummary";

/**
 *
 * @param {String} firstName
 * @param {String} lastName
 * @returns {Object}
 */
module.exports = (firstName,lastName) => {
  return {
    soapAction: SOAP_ACTION,
    body: `<FutureBookingSummaryRequest canHandleVaultedCreditCard="true" xmlns:hc="http://webservices.micros.com/og/4.3/HotelCommon/" xmlns="http://webservices.micros.com/ows/5.1/Reservation.wsdl">
        <LastName>${firstName}</LastName>
        <FirstName>${lastName}</FirstName>
    </FutureBookingSummaryRequest>>`,
    raw,
    toJson,
  };
};
