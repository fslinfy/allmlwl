Ext.define("MyApp.store.UserTypeStore",
{
    extend: "Ext.data.Store",
    alias: "store.UserTypeStore",
    model: "MyApp.model.UserTypeModel",
    pageSize: 1E4,
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dusertypelist",
            update: sys_ActionPHP + "?act\x3dusertypesave",
            create: sys_ActionPHP + "?act\x3dusertypenew",
            destroy: sys_ActionPHP + "?act\x3dusertypedelete"
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