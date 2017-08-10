

(function(exports) {
  "use strict";

  function Person(name) {
    this.name = name || "Anon person";
  }
  exports.Person = Person;

  Person.prototype = {
    greets: function(target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target + " ! ";
    }
  };
})(this);