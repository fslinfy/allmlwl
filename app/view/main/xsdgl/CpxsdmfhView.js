﻿Ext.define("MyApp.view.main.xsdgl.CpxsdmfhView",
{
    extend: "Ext.container.Container",
    xtype: "CpxsdmfhView",
    requires: ["MyApp.view.main.showView.CpxsdListView"],
    controller: "CpxsdmfhCtrl",
    layout: "fit",
    closeAction: "destroy",
    items: [
    {
        xtype: "CpxsdListView"
    }]
});