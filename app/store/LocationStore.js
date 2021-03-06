Ext.define("MyApp.store.LocationStore",
{
    extend: "Ext.data.Store",
    alias: "store.LocationStore",
    model: "MyApp.model.LocationModel",
    pageSize: 1E4,
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dlocationlist",
            update: sys_ActionPHP + "?act\x3dlocationsave",
            create: sys_ActionPHP + "?act\x3dlocationnew",
            destroy: sys_ActionPHP + "?act\x3dlocationdelete"
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
            p_e_code: sys_enterprise_code
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    },
    autoLoad: true
});