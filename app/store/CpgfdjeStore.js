Ext.define("MyApp.store.CpgfdjeStore",
{
    extend: "Ext.data.Store",
    alias: "store.CpgfdjeStore",
    model: "MyApp.model.CpgfdjeModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act=wxCpgfdjelist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            gfid: 0,
            p_l_id: sys_location_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    }
});