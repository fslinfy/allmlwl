Ext.define('MyApp.view.main.wxcpgfgl.wxCpgfdshView',
{
    extend: 'Ext.container.Container',
    xtype: 'wxCpgfdshView',
    requires: [
        'MyApp.view.main.showView.wxCpgfdListView', 
        "MyApp.view.main.wxcpgfgl.wxCpgfdshShowView"
    ],
    controller: 'wxCpgfdshCtrl',
    layout: 'fit',
    closeAction: 'destroy',
    items: [
    {
        xtype: "CpgfdListView"
    }]
});