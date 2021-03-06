Ext.define("MyApp.store.CpckdjeStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpckdjeStore",
    model: "MyApp.model.CpckdjeModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dCpckdjelist_pc"
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