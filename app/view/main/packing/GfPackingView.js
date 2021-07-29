var GfPackingStore = Ext.define("MyApp.store.GfPackingStore",
{
    extend: "Ext.data.Store",
    alias: "store.GfPackingStore",
    pageSize: 1E4,
    model: "MyApp.model.PackingModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dpackinglist0",
            update: sys_ActionPHP + "?act\x3dpackingsave"
        },
        actionMethods:
        {
            create: "POST",
            read: "GET",
            update: "POST",
            destroy: "POST"
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            p_e_code: sys_enterprise_code,
            p_l_id: sys_location_id,
            optype: "gfgl",
            khid: 0
        },
        reader:
        {
            type: "json",
            rootProperty: "rows",
            totalProperty: "results"
        }
    },
    autoLoad: false
});
Ext.define('MyApp.view.main.packing.GfPackingView',
{
    extend: 'Ext.grid.Panel',
    xtype: 'GfPackingView',
    title: 'GfPacking',
    requires: [],
    id: 'GfPackingGrid',
    plugins: ['cellediting', 'gridfilters'],
    controller: 'GfPackingCtrl',
    columnLines: true,
    enableHdMenu: false,
    enableColumnHide: false,
    store:
    {
        type: 'GfPackingStore'
    },
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
                xtype: 'displayfield',
                itemId: "PageTitle",
                value: '过车作业项目维护',
                style:
                {
                    'font-size': '16px',
                    'font-weight': 'bold',
                    margin: '5px 30px 0 0px',
                    color: "#000"
                },
                fieldCls: 'biggertext',
                hideLabel: true
            },
            {
                labelWidth: 30,
                xtype: 'triggerfield',
                fieldLabel: '过滤',
                itemId: 'FilterField',
                flex: 1,
                triggerCls: 'x-form-clear-trigger',
                onTriggerClick: function ()
                {
                    this.reset();
                }
            }]
        },
        {
            xtype: 'QueryToolbarView'
        }]
    }],
    columns: [
    {
        text: '代码',
        width: 50,
        dataIndex: 'PS_code',
        align: 'left',
        sortable: false,
        filter:
        {
            type: 'string',
            itemDefaults:
            {
                emptyText: 'Search for…'
            }
        }
    },
    {
        text: '作业名称',
        dataIndex: 'PS_name',
        width: 250,
        align: 'left',
        sortable: false,
        filter:
        {
            type: 'string',
            itemDefaults:
            {
                emptyText: 'Search for…'
            }
        }
    },
    {
        text: '作业费用单价',
        columns: [
        {
            xtype: "numbercolumn",
            align: 'right',
            format: '00000.00',
            text: '装卸单价',
            dataIndex: 'Bydj',
            flex: 1,
            sortable: false,
            editor:
            {
                type: 'numberfield',
                decimalPrecision: 3,
                align: 'right',
                allowBlank: true,
                minValue: 0,
                maxValue: 9999.99
            }
        }]
    },
    {
        text: '工作费用提成单价',
        columns: [
        {
            xtype: "numbercolumn",
            align: 'right',
            format: '00000.00',
            text: '搬运',
            dataIndex: 'Bytcdj',
            flex: 1,
            sortable: false,
            editor:
            {
                type: 'numberfield',
                decimalPrecision: 3,
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
            text: '搬运(粉料)',
            dataIndex: 'Bytcdjt',
            flex: 1,
            sortable: false,
            editor:
            {
                type: 'numberfield',
                decimalPrecision: 3,
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
            text: '机械',
            dataIndex: 'Gstcdj',
            flex: 1,
            sortable: false,
            editor:
            {
                type: 'numberfield',
                decimalPrecision: 3,
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
            text: '仓管',
            dataIndex: 'Cgtcdj',
            flex: 1,
            sortable: false,
            editor:
            {
                type: 'numberfield',
                decimalPrecision: 3,
                align: 'right',
                allowBlank: true,
                minValue: 0,
                maxValue: 9999.99
            }
        }]
    },
    {
        width: 90,
        text: "重量核算",
        sortable: false,
        dataIndex: "Weight_Status",
        align: 'center',
        renderer: function (val)
        {
            if (val) return "是";
            else return ""
        }

    },
    {
        width: 50,
        text: "活跃",
        sortable: false,
        dataIndex: "Active",
        align: 'center',
        renderer: function (val)
        {
            if (val) return "是";
            else return ""
        }
    }],
    listeners:
    {
        select: 'onItemSelected'
    }
});