/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"sap/btp/sapui5es5/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});