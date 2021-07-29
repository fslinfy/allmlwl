Ext.define('MyApp.view.main.wxcpgfgl.wxCpgfdlocView',
{
    extend: 'Ext.container.Container',
    xtype: 'wxCpgfdlocView',
    requires: [
        'MyApp.view.main.showView.wxCpgfdListView',
        "MyApp.view.main.wxcpgfgl.wxCpgfdshShowView"
    ],
    controller: 'wxCpgfdlocCtrl',
    layout: 'fit',
    closeAction: 'destroy',
    items: [
    {
        xtype: "CpgfdListView"
    }]
});