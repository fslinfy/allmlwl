Ext.define("MyApp.store.CpjkdjeStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpjkdjeStore",
    model: "MyApp.model.CpjkdjeModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dCpjkdjelist_pc"
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