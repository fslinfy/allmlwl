Ext.define("MyApp.store.CpjkdListStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpjkdListStore",
    model: "MyApp.model.CpjkdModel",
    pageSize: 10,
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dcpjkdlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            loc: "cpjkdloc",
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