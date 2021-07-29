Ext.define('MyApp.view.main.wxcpgfgl.wxCpgfdckshView',
{
    extend: 'Ext.container.Container',
    xtype: 'wxCpgfdckshView',
    requires: [
        'MyApp.view.main.showView.wxCpgfdListView', 
        "MyApp.view.main.wxcpgfgl.wxCpgfdshShowView"
    ],
    controller: 'wxCpgfdckshCtrl',
    layout: 'fit',
    closeAction: 'destroy',
    items: [
    {
        xtype: "CpgfdListView"
    }]
});