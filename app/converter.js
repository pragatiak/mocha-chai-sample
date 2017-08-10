exports.rgbToHex = function(red, green, blue) {

  var redHex   = red.toString(16);
  var greenHex = green.toString(16);
  var blueHex  = blue.toString(16);

  return pad(redHex) + pad(greenHex) + pad(blueHex);

};

function pad(hex) {
  return (hex.length === 1 ? "0" + hex : hex);
}

exports.hexToRgb = function(hex) {

  var red   = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue  = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];

};

module.exports.toggleTabsView = function(target) {
			this.ui.tabs.removeClass('active');
			target.parent().addClass('active');
			this.ui.tabsLinks.attr({
				"aria-selected": false,
				"tabindex": "0"
			});
			target.attr({
				"aria-selected": true,
				"tabindex": "-1"
			});

			if(target.attr("id") === "myGoalsTabId") {
				Application.app.vent.trigger("TAB_SWITCH_EVENT", true);
      }
      return target;
		}

module.exports.addClass = function(el, newClass) {
  //addClass: function(el, newClass) {
    if(el.className.indexOf(newClass) !== -1) {
      return;
    }

    if(el.className !== '') {
      //ensure class names are separated by a space
      newClass = ' ' + newClass;
    }

    el.className += newClass;
  }
