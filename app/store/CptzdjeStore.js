Ext.define("MyApp.store.CptzdjeStore",
{
    extend: "Ext.data.Store",
    alias: "store.CptzdjeStore",
    model: "MyApp.model.CptzdjeModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dcptzdjelist_pc"
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