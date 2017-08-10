var expect = require("chai").expect;
GetPerson  = require( "../app/person");

describe("Person", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var person = new GetPerson.Person();
      expect(person.name).to.equal("Anon person");
    });

    it("should set person's name if provided", function() {
      var person = new GetPerson.Person("Kate");
      expect(person.name).to.equal("Kate");
    });
  });

  describe("#greets", function() {
    it("should throw if no target is passed in", function() {
      expect(function() {
        (new GetPerson.Person()).greets();
      }).to.throw(Error);
    });

    it("should greet passed target", function() {
      var greetings = (new GetPerson.Person("Kate")).greets("Baby");
      expect(greetings).to.equal("Kate greets Baby");
    });
  });
});