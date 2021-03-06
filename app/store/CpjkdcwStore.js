Ext.define("MyApp.store.CpjkdcwStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpjkdcwStore",
    model: "MyApp.model.CpjkdcwModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dCpjkdcwlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            jkid: 0,
            p_l_id: sys_location_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    }
});