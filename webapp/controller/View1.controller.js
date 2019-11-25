sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.m.es5.es5_demo_projectV2.controller.View1", {
		onInit: function () {
			var that = this;
			var oModel = new JSONModel();
			this.getView().setModel(oModel);
			
			var svcURL = "/destinations/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
			this.oDataModel = new sap.ui.model.odata.ODataModel(svcURL);
			this.oDataModel.read("ProductSet", {
				success: function (oData, oResponse) {
					that.getView().getModel().setData(oData);
				},
				error: function (error) {

				}
			});
			
			this.productDetailModel = this.getOwnerComponent().getModel("productDetailModel");
		},
		onHandleSelect: function (oEvt) {
			var selectedItemObj = oEvt.getSource().getSelectedItem().getBindingContext().getObject();
			this.productDetailModel.setData(selectedItemObj);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2");
		}
	});
});