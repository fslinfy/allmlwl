Ext.define('MyApp.view.main.wxcpgfgl.wxCpgfdcwshView',
{
    extend: 'Ext.container.Container',
    xtype: 'wxCpgfdcwshView',
    requires: [
        'MyApp.view.main.showView.wxCpgfdListView', 
        "MyApp.view.main.wxcpgfgl.wxCpgfdshShowView"
    ],
    controller: 'wxCpgfdcwshCtrl',
    layout: 'fit',
    closeAction: 'destroy',
    items: [
    {
        xtype: "CpgfdListView"
    }]
});