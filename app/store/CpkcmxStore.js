Ext.define("MyApp.store.CpkcmxStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpkcmxStore",
    model: "MyApp.model.CpkcmxModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act=cpkcmxlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            loc: "cpkmxcloc",
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            p_l_id: sys_location_id,
            khid: sys_customer_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    }
});