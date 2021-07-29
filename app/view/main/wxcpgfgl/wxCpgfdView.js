﻿Ext.define('MyApp.view.main.wxcpgfgl.wxCpgfdView',
{
    extend: 'Ext.container.Container',
    xtype: 'wxCpgfdView',
    requires: [
        'MyApp.view.main.showView.wxCpgfdListView', 
        "MyApp.view.main.showView.CpgfdShowView"
    ],
    controller: 'wxCpgfdCtrl',
    layout: 'fit',
    closeAction: 'destroy',
    items: [
    {
        xtype: "CpgfdListView"
    }]
});