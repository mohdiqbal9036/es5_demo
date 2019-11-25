/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/m/es5/es5_demo_projectV2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});