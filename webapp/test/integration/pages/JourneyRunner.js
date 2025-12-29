sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zrja4hpurorder/test/integration/pages/PurchaseOrderList",
	"zrja4hpurorder/test/integration/pages/PurchaseOrderObjectPage"
], function (JourneyRunner, PurchaseOrderList, PurchaseOrderObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zrja4hpurorder') + '/test/flp.html#app-preview',
        pages: {
			onThePurchaseOrderList: PurchaseOrderList,
			onThePurchaseOrderObjectPage: PurchaseOrderObjectPage
        },
        async: true
    });

    return runner;
});

