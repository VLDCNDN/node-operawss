var expect = require("chai").expect;
var app = require("../index");

describe("Main ", function () {
  describe("Config Test", function () {
    it("should return error if config is empty", function () {
      expect(app({})).to.have.own.property("errorMessage");
      expect(app()).to.have.own.property("errorMessage");
      expect(app()).to.be.an("object");
      expect(app()).to.deep.equal({ errorMessage: "Please enter config" });
    });

    it("should return 'Please enter required config' error if important keys missing", function () {
      expect(
        app({
          url: "https://url.com",
          propertyCode: "TESTT",
          username: "Username",
          password: "Password",
        })
      ).to.deep.an("object");
      expect(
        app({
          url: "https://url.com",
          propertyCode: "TESTT",
          password: "Password",
        })
      ).to.deep.equal({ errorMessage: "Please enter required param" });
      expect(
        app({
          url: "https://url.com",
          username: "Username",
          password: "Password",
        })
      ).to.deep.equal({ errorMessage: "Please enter required param" });
      expect(
        app({
          propertyCode: "TESTT",
          username: "Username",
          password: "Password",
        })
      ).to.deep.equal({ errorMessage: "Please enter required param" });
    });
  });

  describe("FetchBookingRequest", function () {
    it("should be return what inputted", async function () {
      const data = app({
        url: "test",
        propertyCode: "AMOFE2",
        chainCode: "FE",
        username: "palvisionkioskuat",
        password: "kioskUAT12345",
        wsseUsername: "palvisionkioskuat",
        wssePassword: "kioskUAT12345"
      });
      const d = await data.Reservation().FetchBooking.byConfirmationNumber(152366649).toJson();
      console.log(d);
      // expect(data.Reservation().FetchBooking.byConfirmationNumber(1)).to.be.an('string');
    });
  });
});
