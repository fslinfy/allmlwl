Ext.define("MyApp.view.main.cpghgl.CpghdghlocView",{
    extend:"Ext.container.Container",
    xtype:"CpghdghlocView",
    requires:[
    "MyApp.view.main.showView.CpghdListView" ,
    "MyApp.view.main.cpghgl.CpghdshShowView" ,
    'MyApp.view.main.cpghgl.CpghdghshStore'  , 
    'MyApp.store.CpghdcwStore'
],
    controller:"CpghdghlocCtrl",
    layout:"fit",
    closeAction:"destroy",
    items:[
        {xtype:"CpghdListView"}
    ]
});