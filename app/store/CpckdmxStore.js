Ext.define("MyApp.store.CpckdmxStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpckdmxStore",
    model: "MyApp.model.CpckdmxModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dcpckdmxlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
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