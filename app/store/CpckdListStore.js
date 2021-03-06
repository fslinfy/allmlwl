Ext.define("MyApp.store.CpckdListStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpckdListStore",
    model: "MyApp.model.CpckdModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dCpckdlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            loc: "cpckdmxsh",
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