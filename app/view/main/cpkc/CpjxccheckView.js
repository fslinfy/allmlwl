﻿var CpjxccheckStore = Ext.create('MyApp.store.CpkclocStore',
{
    groupField: 'khmc',
    proxy:
    {
        type: 'ajax',
        api:
        {
            read: sys_ActionPHP + '?act=loccheckcpkc'
        },
        actionMethods:
        {
            read: 'GET'
        },
        extraParams:
        {
            loc: 'cpjxccheck',
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            p_l_id: sys_location_id,
            khid: 0,
            cdid: 0,
            cpid: 0,
            bzid: 0,
            area: '',
            ny: 0,
            yu: 0
        },
        reader:
        {
            type: 'json',
            rootProperty: 'rows'
        }
    },
    autoLoad: false
});
var showSummary = true;
Ext.define('MyApp.view.main.cpkc.CpjxccheckView',
{
    extend: 'Ext.grid.Panel',
    xtype: 'CpjxccheckView',
    requires: [
        'MyApp.view.main.QueryToolbarView',
        'MyApp.view.main.tree.QueryKhmc',
        'MyApp.view.main.tree.QueryCpmc',
        'MyApp.view.main.tree.QueryCdmc',
        'MyApp.view.main.tree.QueryCkmc'
    ],
    closeAction: 'destroy',
    itemId: 'CpjxccheckGrid',
    reference: 'CpjxccheckGrid',
    plugins: ['gridfilters'],
    controller: 'CpjxccheckCtrl',
    viewModel:
    {
        data:
        {
            'khmc': '',
            'khid': 0,
            'ny': 0,
            'yu': 0,
            'ckmc': '',
            'ckid': 0,
            'cpmc': '',
            'cpid': 0,
            'cdmc': '',
            'cdid': 0,
            'bzmc': '',
            'bzid': 0
        }
    },
    store: CpjxccheckStore,
    tbar: [
    {
        xtype: 'container',
        flex: 1,
        layout: 'hbox',
        items: [
        {
            xtype: 'container',
            flex: 1,
            layout: 'hbox',
            items: [
            {
                xtype: "numberfield",
                name: 'ny',
                labelWidth: 60,
                fieldLabel: '基准年度',
                bind: "{ny}",
                hideTrigger: false,
                margin: '1 0 1 1',
                width: 200,
                maxValue: 9999,
                decimalPrecision: 0
            },
            {
                xtype: "numberfield",
                name: 'yu',
                labelWidth: 30,
                fieldLabel: '月度',
                bind: "{yu}",
                hideTrigger: false,
                margin: '1 0 1 10',
                width: 100,
                minValue: 0,
                maxValue: 12,
                decimalPrecision: 0
            },
            {
                xtype: 'QueryKhmc',
                flex: 1,
                hidden: (sys_customer_id > 0)
            },
            {
                xtype: 'QueryCkmc',
                flex: 1,
                hidden: (sys_location_id > 0)
            },
            {
                xtype: 'QueryCdmc',
                flex: 1
            },
            {
                xtype: 'QueryCpmc',
                flex: 1
            }]
        },
        {
            xtype: 'QueryToolbarView'
        }]
    }],
    columnLines: true,
    enableColumnHide: false,
    features: [
    {
        id: 'group',
        ftype: 'groupingsummary',
        groupHeaderTpl: '{name}',
        hideGroupedHeader: true,
        enableGroupingMenu: false
    },
    {
        ftype: 'summary',
        dock: 'bottom'
    }],
    lockedViewConfig:
    {
        scroll: 'horizontal'
    },
    columns: [
    {
        text: '日期',
        width: 100,
        dataIndex: 'czrq'
    },
    {
        text: '客户名称',
        width: 200,
        hideable: true,
        hidden: (sys_customer_id > 0),
        dataIndex: 'khmc'
    },
    {
        text: '仓库名称',
        width: 200,
        hideable: true,
        hidden: (sys_location_id > 0),
        dataIndex: 'ckmc'
    },
    {
        text: '产地名称',
        flex: 1,
        dataIndex: 'cdmc'
    },
    {
        text: '商品名称',
        flex: 1,
        dataIndex: 'cpmc'
    },
    {
        text: '包装',
        flex: 1,
        dataIndex: 'bzmc',
        summaryType: 'count',
        summaryRenderer: function (value, summaryData, dataIndex)
        {
            if (typeof value == "object")
            {
                return "合计";
            }
            else
            {
                return "小计";
            }
        }
    },
    {
        text: '批号',
        width: 100,
        dataIndex: 'cpph'
    },
    {
        text: '单位',
        width: 50,
        sortable: false,
        dataIndex: 'jldw'
    },
    {
        text: '上月库存',
        columns: [
        {
            xtype: 'numbercolumn',
            text: '数量',
            sortable: false,
            width: 70,
            dataIndex: 'kcsl0',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        },
        {
            xtype: 'numbercolumn',
            text: '重量(吨)',
            sortable: false,
            width: 85,
            align: 'right',
            dataIndex: 'kczl0',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        }]
    },
    {
        text: '本月商品进库',
        columns: [
        {
            xtype: 'numbercolumn',
            text: '数量',
            sortable: false,
            width: 70,
            align: 'right',
            dataIndex: 'jcsl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        },
        {
            xtype: 'numbercolumn',
            text: '重量(吨)',
            sortable: false,
            width: 85,
            align: 'right',
            dataIndex: 'jczl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        }]
    },
    {
        text: '本月商品出库',
        columns: [
        {
            xtype: 'numbercolumn',
            text: '数量',
            sortable: false,
            width: 70,
            align: 'right',
            dataIndex: 'ccsl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        },
        {
            xtype: 'numbercolumn',
            text: '重量(吨)',
            sortable: false,
            width: 85,
            align: 'right',
            dataIndex: 'cczl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        }]
    },
    {
        text: '本月商品调账',
        columns: [
        {
            xtype: 'numbercolumn',
            text: '数量',
            sortable: false,
            width: 70,
            align: 'right',
            dataIndex: 'tzsl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        },
        {
            xtype: 'numbercolumn',
            text: '重量(吨)',
            sortable: false,
            width: 85,
            align: 'right',
            dataIndex: 'tzzl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        }]
    },
    {
        text: '商品结存',
        columns: [
        {
            xtype: 'numbercolumn',
            text: '数量',
            sortable: false,
            width: 70,
            align: 'right',
            dataIndex: 'kcsl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        },
        {
            xtype: 'numbercolumn',
            text: '重量(吨)',
            sortable: false,
            width: 85,
            align: 'right',
            dataIndex: 'kczl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        }]
    },
    {
        text: '仓库实际库存',
        columns: [
        {
            xtype: 'numbercolumn',
            text: '数量',
            sortable: false,
            width: 70,
            align: 'right',
            dataIndex: 'cksl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        },
        {
            xtype: 'numbercolumn',
            text: '重量(吨)',
            sortable: false,
            width: 85,
            align: 'right',
            dataIndex: 'ckzl',
            summaryType: 'sum',
            summaryRenderer: slrenderer,
            field:
            {
                xtype: 'numberfield'
            },
            renderer: slrenderer
        }]
    }]
});