Ext.define("MyApp.store.TypeStore",
{
    extend: "Ext.data.Store",
    alias: "store.TypeStore",
    model: "MyApp.model.TypeModel",
    pageSize: 1E4,
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dtypelist",
            update: sys_ActionPHP + "?act\x3dtypesave",
            create: sys_ActionPHP + "?act\x3dtypenew",
            destroy: sys_ActionPHP + "?act\x3dtypedelete"
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