Ext.define("MyApp.store.UsersStore",
{
    extend: "Ext.data.Store",
    alias: "store.UsersStore",
    model: "MyApp.model.UsersModel",
    pageSize: 1E4,
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3duserslist",
            update: sys_ActionPHP + "?act\x3duserssave",
            create: sys_ActionPHP + "?act\x3dusersnew",
            destroy: sys_ActionPHP + "?act\x3dusersdelete"
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
            p_l_id: sys_location_id,
            table: "users"
        },
        reader:
        {
            users: "json",
            rootProperty: "rows"
        }
    },
    autoLoad: true
});