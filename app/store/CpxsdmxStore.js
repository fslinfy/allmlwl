Ext.define("MyApp.store.CpxsdmxStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpxsdmxStore",
    model: "MyApp.model.CpxsdmxModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act=Cpxsdmxlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            xsid: 0,
            khid: sys_customer_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    }
});