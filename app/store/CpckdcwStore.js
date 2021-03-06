Ext.define("MyApp.store.CpckdcwStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpckdcwStore",
    model: "MyApp.model.CpckdcwModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dCpckdcwlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            loc: "",
            ckid: 0,
            p_l_id: sys_location_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    }
});