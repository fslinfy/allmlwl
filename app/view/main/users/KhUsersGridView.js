Ext.define('MyApp.view.main.users.KhUsersGridView',
{
    extend: 'Ext.grid.Panel',
    alias: 'widget.KhUsersGridView',
    itemId: 'KhUsersGridView',
    requires: ['MyApp.store.KhUsersStore',
        'MyApp.view.main.QueryToolbarView', 
		'MyApp.view.main.tree.QueryKhmc'
    ],
    plugins: ['cellediting', 'gridfilters'],
    store:
    {
        type: 'KhUsersStore'
    },
    closeAction: 'destroy',
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
                xtype: 'QueryKhmc'
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
            text: '用户ID',
            width: 80,
            dataIndex: 'userid',
            align: 'left'
        },
        {
            text: '代码',
            width: 80,
            dataIndex: 'usercode',
            align: 'left',
            editor:
            {
                allowBlank: false,
                regex: /(^[0-9A-Z]{1,5}$)/,
                type: 'string'
            }
        },
        {
            text: '用户名称',
            dataIndex: 'username',
            align: 'left',
            filter:
            {
                type: 'string',
                itemDefaults:
                {
                    emptyText: 'Search for…'
                }
            },
            editor:
            {
                allowBlank: false,
                type: 'string'
            }
        },
        {
            text: '用户名称',
            dataIndex: 'username',
            align: 'left',
            filter:
            {
                type: 'string',
                itemDefaults:
                {
                    emptyText: 'Search for…'
                }
            },
            editor:
            {
                allowBlank: false,
                type: 'string'
            }
        },
        {
            text: '联系电话',
            dataIndex: 'tel',
            align: 'left',
            filter:
            {
                type: 'string',
                itemDefaults:
                {
                    emptyText: 'Search for…'
                }
            },
            editor:
            {
                allowBlank: false,
                type: 'string'
            }
        },
        {
            text: '移动电话',
            dataIndex: 'smsphone',
            flex: 2,
            align: 'left',
            editor:
            {
                allowBlank: true,
                type: 'string'
            }
        },
        {
            xtype: 'numbercolumn',
            text: '登录次数',
            dataIndex: 'logincount',
            align: 'left',
            renderer: intrenderer
        },
        {
            xtype: 'checkcolumn',
            width: 90,
            ReadOnly: true,
            text: '锁状态',
            dataIndex: 'locked'
        },
        {
            xtype: 'checkcolumn',
            width: 90,
            ReadOnly: true,
            text: '激活',
            dataIndex: 'smsactive'
        },
        {
            xtype: 'checkcolumn',
            width: 90,
            ReadOnly: true,
            text: '有效',
            dataIndex: 'active'
        }
    ],
    listeners:
    {
        select: 'onItemSelected',
        selectionchange: 'onSelectionchange'
    }
});