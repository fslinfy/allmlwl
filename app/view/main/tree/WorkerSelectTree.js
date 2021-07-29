Ext.define("MyApp.view.main.tree.WorkerSelectTree",
{
    extend: "Ext.window.Window",
    xtype: "selectWorkerWindow",
    reference: "popupSelectWorkerWindow",
    itemId: "selectWorkerWindow",
    title: "\u9009\u62e9\u4eba\u5458",
    width: 600,
    height: 500,
    minWidth: 300,
    minHeight: 300,
    layout: "fit",
    closeAction: "destroy",
    modal: true,
    layout:
    {
        type: "hbox",
        align: "stretch"
    },
    defaults:
    {
        xtype: "treepanel",
        singleExpand: false,
        rootVisible: false,
        draggable: false,
        useArrows: true,
        lines: true,
        border: 1,
        expanded: true,
        flex: 1
    },
    border: false,
    items: [
    {
        reference: "selectWorkerTreePanel",
        itemId: "selectWorkerTreePanel",
        store:
        {
            itemId: "selectWorkerTreeStore",
            type: "tree",
            proxy:
            {
                type: "ajax",
                api:
                {
                    read: sys_ActionPHP + "?act\x3dworkerselecttreelist"
                },
                actionMethods:
                {
                    read: "GET"
                },
                extraParams:
                {
                    userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                    p_e_code: sys_enterprise_code,
                    p_l_id: sys_location_id,
                    jobs: 1,
                    displayall: sys_DisplayAll
                }
            },
            root:
            {
                text: "\u5168\u90e8",
                id: "ALL",
                code: "",
                checked: false,
                expanded: true,
                draggable: false
            },
            autoLoad: true
        }
    },
    {
        reference: "selectWorkerTreePanel1",
        itemId: "selectWorkerTreePanel1",
        margin: "0 5 0 5",
        store:
        {
            itemId: "selectWorkerTreeStore1",
            type: "tree",
            proxy:
            {
                type: "ajax",
                api:
                {
                    read: sys_ActionPHP + "?act\x3dworkerselecttreelist"
                },
                actionMethods:
                {
                    read: "GET"
                },
                extraParams:
                {
                    userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                    p_e_code: sys_enterprise_code,
                    p_l_id: sys_location_id,
                    jobs: 2,
                    displayall: sys_DisplayAll
                }
            },
            root:
            {
                text: "\u5168\u90e8",
                id: "ALL",
                code: "",
                checked: false,
                expanded: true,
                draggable: false
            },
            autoLoad: true
        }
    },
    {
        reference: "selectWorkerTreePanel2",
        itemId: "selectWorkerTreePanel2",
        store:
        {
            itemId: "selectWorkerTreeStore2",
            type: "tree",
            proxy:
            {
                type: "ajax",
                api:
                {
                    read: sys_ActionPHP + "?act\x3dworkerselecttreelist"
                },
                actionMethods:
                {
                    read: "GET"
                },
                extraParams:
                {
                    userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                    p_e_code: sys_enterprise_code,
                    p_l_id: sys_location_id,
                    jobs: 3,
                    displayall: sys_DisplayAll
                }
            },
            root:
            {
                text: "\u5168\u90e8",
                id: "ALL",
                code: "",
                checked: false,
                expanded: true,
                draggable: false
            },
            autoLoad: true
        }
    }],
    buttons: ["-\x3e",
    {
        text: "\u786e\u8ba4",
        itemId: "btnWorkerTreeAdd",
        icon: "images/right.gif",
        handler: "onWorkerSelectOkClick"
    },
    {
        text: "\u653e\u5f03",
        icon: "images/close.gif",
        handler: function ()
        {
            this.up("#selectWorkerWindow").close()
        }
    }]
});