﻿Ext.define("MyApp.view.main.jobs.JobsView",
{
    extend: "Ext.grid.Panel",
    xtype: "JobsView",
    title: "Jobs",
    id: "JobsGrid",
    plugins: ["cellediting", "gridfilters"],
    controller: "JobsCtrl",
    store:
    {
        type: "JobsStore"
    },
    closeAction: "destroy",
    tbar: [
    {
        xtype: "container",
        flex: 1,
        layout: "hbox",
        items: [
        {
            xtype: "container",
            flex: 1,
            layout: "hbox",
            items: [
            {
                xtype: 'displayfield',
                itemId: "PageTitle",
                value: '提成单价维护',
                style:
                {
                    'font-size': '16px',
                    'font-weight': 'bold',
                    margin: '5px 30px 0 0',
                    color: "#000"
                },
                fieldCls: 'biggertext',
                hideLabel: true
            },
            {
                labelWidth: 30,
                xtype: "triggerfield",
                fieldLabel: "\u8fc7\u6ee4",
                itemId: "FilterField",
                flex: 1,
                triggerCls: "x-form-clear-trigger",
                onTriggerClick: function ()
                {
                    this.reset()
                }
            }]
        },
        {
            xtype: "QueryToolbarView"
        }]
    }],
    columns: [
    {
        text: "代码",
        width: 80,
        dataIndex: "Jobs",
        align: "center",
    },
    {
        text: "名称",
        dataIndex: "JobsName",
        width: 280,
        align: "left",
        filter:
        {
            type: "string",
            itemDefaults:
            {
                emptyText: "Search for\u2026"
            }
        },
    },
    {
        xtype: "numbercolumn",
        align: 'right',
        format: '00000.00',
        text: '基本计提单价',
        dataIndex: 'Tcdj',
        width: 120,
        align: 'left',
        sortable: false,
        editor:
        {
            type: 'numberfield',
            decimalPrecision: 2,
            align: 'right',
            allowBlank: true,
            minValue: 0,
            maxValue: 9999.99
        }
    },
    {
        xtype: "numbercolumn",
        align: 'right',
        format: '00000.00',
        text: '粉料计提单价',
        dataIndex: 'Tcdj1',
        width: 120,
        align: 'left',
        sortable: false,
        editor:
        {
            type: 'numberfield',
            decimalPrecision: 2,
            align: 'right',
            allowBlank: true,
            minValue: 0,
            maxValue: 9999.99
        }
    }],
    listeners:
    {
        select: "onItemSelected"
    }
});