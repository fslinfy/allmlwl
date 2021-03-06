Ext.define("MyApp.store.CptzdListStore",
{
    extend: "Ext.data.Store",
    alias: "store.CptzdListStore",
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
            loc: "cptzdloc",
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