Ext.define("MyApp.store.CpjkdmxStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpjkdmxStore",
    model: "MyApp.model.CpjkdmxModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act=Cpjkdmxlist_pc"
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