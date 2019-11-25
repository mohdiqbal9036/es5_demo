sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
], function (Controller,JSONModel,History) {
	"use strict";

	return Controller.extend("sap.m.es5.es5_demo_projectV2.controller.View2", {
		onInit: function () {
			this.productDetailModel = this.getOwnerComponent().getModel("productDetailModel");
			this.getView().setModel(this.productDetailModel);
		},
		onClickBackbtn: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("", true);
			}
		}
	});
});