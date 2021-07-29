Ext.define("MyApp.view.main.cpghgl.CpghdcwshView", {
    extend: "Ext.container.Container",
    xtype: "CpghdcwshView",
    requires: [
        "MyApp.view.main.showView.CpghdListView", 
        "MyApp.view.main.cpghgl.CpghdshShowView", 
        'MyApp.view.main.cpghgl.CpghdghshStore' , 
        'MyApp.store.CpghdcwStore'
    ],
    controller: "CpghdcwshCtrl",
    layout: "fit",
    closeAction: "destroy",
    items: [{
        xtype: "CpghdListView"
    }]
});