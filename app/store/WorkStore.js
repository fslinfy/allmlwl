Ext.define("MyApp.store.WorkStore",
{
    extend: "Ext.data.Store",
    alias: "store.WorkStore",
    model: "MyApp.model.WorkModel",
    pageSize: 1E4,
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dworklist0",
            update: sys_ActionPHP + "?act\x3dworksave",
            create: sys_ActionPHP + "?act\x3dworknew",
            destroy: sys_ActionPHP + "?act\x3dworkdelete"
        },
        actionMethods:
        {
            create: "POST",
            read: "GET",
            update: "POST",
            destroy: "POST"
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            p_e_code: sys_enterprise_code,
            p_l_id: sys_location_id
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    },
    autoLoad: true
});