Ext.define("MyApp.store.CpckdStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpckdStore",
    model: "MyApp.model.CpckdModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dcpckdlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            loc: "cpckdsh",
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            p_l_id: sys_location_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    }
});