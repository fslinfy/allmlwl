Ext.define("MyApp.store.CpghdcwStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpghdcwStore",
    model: "MyApp.model.CpghdcwModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act=Cpghdcwlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            loc: "",
            ghid: 0,
            p_l_id: sys_location_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    }
});