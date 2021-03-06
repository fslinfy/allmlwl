Ext.define("MyApp.store.CptzdStore",
{
    extend: "Ext.data.Store",
    alias: "store.CptzdStore",
    model: "MyApp.model.CptzdModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dCptzdlist_pc"
        },
        actionMethods:
        {
            read: "GET"
        },
        extraParams:
        {
            loc: "cptzdsh",
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            p_l_id: sys_location_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    }
});