var expect = require("chai").expect;
var app = require("../index");

describe("Main ", function () {
  describe("Config Test", function () {
    it("should return error if config is empty", function () {
      expect(app({})).to.have.own.property("message");
      expect(app()).to.have.own.property("message");
      expect(app()).to.be.an("object");
      expect(app()).to.deep.equal({ message: "Please enter config" });
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
      ).to.deep.equal({ message: "Please enter required param" });
      expect(
        app({
          url: "https://url.com",
          username: "Username",
          password: "Password",
        })
      ).to.deep.equal({ message: "Please enter required param" });
      expect(
        app({
          propertyCode: "TESTT",
          username: "Username",
          password: "Password",
        })
      ).to.deep.equal({ message: "Please enter required param" });
    });
  });

  describe("FetchBookingRequest", function () {
    it("should be return what inputted", function () {
      const data = app({
        url: "test",
        propertyCode: "TESTT",
        username: "Username",
        password: "Password",
        wsseUsername: "Test",
        wssePassword: "Test2"
      });
      console.log(data.Reservation().FetchBooking.byConfirmationNumber(1).raw());
      // expect(data.Reservation().FetchBooking.byConfirmationNumber(1)).to.be.an('string');
    });
  });
});
