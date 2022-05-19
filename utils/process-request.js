const processHeader = (config) => {
  const currentDate = new Date().toISOString();
  let header = "";

  if (config.wssePassword !== undefined && config.wsseUsername !== undefined) {
    header += `<wsse:Security xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
          <wsse:UsernameToken wsu:Id="UsernameToken-89C29635B49E665F5E157002847059328">
              <wsse:Username>${config.wsseUsername}</wsse:Username>
              <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">${config.wssePassword}</wsse:Password>
          </wsse:UsernameToken>
          <wsu:Timestamp wsu:Id="TS-89C29635B49E665F5E157002847059327">
            <wsu:Created>${currentDate}</wsu:Created>
              <wsu:Expires>${currentDate}</wsu:Expires>
          </wsu:Timestamp>
      </wsse:Security>`;
  }

  header += `<OGHeader transactionID="20211221115011" primaryLangID="E" timeStamp="${currentDate}" xmlns="http://webservices.micros.com/og/4.3/Core/">
        <Origin entityID="KIOSK" systemType="KIOSK" />
        <Destination entityID="TI" systemType="PMS" />
        <Authentication>
            <UserCredentials>
                <UserName>${config.username}</UserName>
                <UserPassword>${config.password}</UserPassword>
                <Domain>${config.propertyCode}</Domain>
            </UserCredentials>
        </Authentication>
      </OGHeader>`;

  return header;
};

module.exports = function (body) {
  
  let data = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:c="http://webservices.micros.com/og/4.3/Common/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:r="http://webservices.micros.com/og/4.3/Reservation/" xmlns:hc="http://webservices.micros.com/og/4.3/HotelCommon/" xmlns:n="http://webservices.micros.com/og/4.3/Name/">
      <soap:Header>
          ${processHeader(global.config)}
      </soap:Header>
      <soap:Body>
          ${body}
      </soap:Body>
  </soap:Envelope>`;
  
  // TODO: add header here and process url
  return {
    data
  };
};
