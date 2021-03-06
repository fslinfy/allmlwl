Ext.define("MyApp.store.CptzdmxStore",
{
    extend: "Ext.data.Store",
    alias: "store.CptzdmxStore",
    model: "MyApp.model.CptzdmxModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dcptzdmxlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            tzid: 0,
            khid: sys_customer_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    }
});