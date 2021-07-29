Ext.define("MyApp.store.PackingStore",
{
    extend: "Ext.data.Store",
    alias: "store.PackingStore",
    pageSize: 1E4,
    model: "MyApp.model.PackingModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dpackinglist0",
            update: sys_ActionPHP + "?act\x3dpackingsave",
            create: sys_ActionPHP + "?act\x3dpackingnew",
            destroy: sys_ActionPHP + "?act\x3dpackingdelete"
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
            optype: "",
            khid: 0
        },
        reader:
        {
            type: "json",
            rootProperty: "rows",
            totalProperty: "results"
        }
    },
    autoLoad: true
});