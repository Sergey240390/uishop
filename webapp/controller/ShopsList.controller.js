sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (jQuery, Controller, JSONModel) {
	"use strict";
	
	var ListController = Controller.extend("sap.m.sample.ObjectHeader.ShopsList", {

		handleLinkObjectAttributePress : function (oEvent) {
			var oSelectedItem = oEvent.getParameter("shop");
            var s1pt = oSelectedItem.getBindingContext().getProperty("Web");
        			 sap.m.URLHelper.redirect(s1pt, true);
		}
	});

	return ListController;

});