sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/epam/uishop/util/utils",
	"com/epam/uishop/model/models",
	"sap/ui/model/json/JSONModel"
], function (Controller, Utils, models, JSONModel) {
	"use strict";
	
	return Controller.extend("sap.m.sample.ObjectHeader.ShopsList", {
		onInit: function () {
			var that = this;
			var component = that.getOwnerComponent();
			if(!component.getModel()){
				component.setModel(models.createEmptyJSONModel());
			}
        	this._shopLoadingTask = Utils.createPeriodicalyTask(function () {
        		$.ajax({
		            type: "GET",
					url: "/services/shop?",
					async: false,
					success: function (data, textStatus, jqXHR) {
		                component.getModel().setData(data);
		            },
		            error: function (data, textStatus, jqXHR) {
						console.log("Error to post ", textStatus, data, jqXHR);
					}
        		});
			}, 25000);
			this._shopLoadingTask.start();
		},

		handleLinkObjectAttributePress : function (oEvent) {
//			var oSelectedItem = oEvent.getParameter("shop");
//            var s1pt = oSelectedItem.getBindingContext().getProperty("Web");
        			 sap.m.URLHelper.redirect("https:/evroopt.by", true);
		}
	});


});