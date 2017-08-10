var expect = require("chai").expect;
var assert = require('assert');
var converter = require("../app/converter");

describe("Color Code Converter", function () {
  describe("RGB to Hex conversion", function () {
    it("converts the basic colors", function () {
      var redHex = converter.rgbToHex(255, 0, 0);
      var greenHex = converter.rgbToHex(0, 255, 0);
      var blueHex = converter.rgbToHex(0, 0, 255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });

  describe("Hex to RGB conversion", function () {
    it("converts the basic colors", function () {
      var red = converter.hexToRgb("ff0000");
      var green = converter.hexToRgb("00ff00");
      var blue = converter.hexToRgb("0000ff");

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);
    });
  });

  // describe("menu View", function() {
  //   it("changeOverview", function() {
  //     console.log(converter.toggleTabsView);
  //     var toggleTabsView   = converter.toggleTabsView('#myGoalsTabId');
  //     // var green = converter.hexToRgb("00ff00");
  //     // var blue  = converter.hexToRgb("0000ff");

  //     expect(toggleTabsView).to.deep.equal([255, 0, 0]);

  //   });
  // });

  describe('Checking for addClass function', function () {
    it('should add class to element', function () {
      var element = { className: '' };
      converter.addClass(element, 'test-class');
      assert.equal(element.className, 'test-class');
    });

    it('should not add a class which already exists', function () {
      var element = { className: 'exists' };
      converter.addClass(element, 'exists');
      var numClasses = element.className.split(' ').length;
      assert.equal(numClasses, 1);
    });
  });


});

