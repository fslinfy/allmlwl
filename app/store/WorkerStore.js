Ext.define("MyApp.store.WorkerStore",
{
    extend: "Ext.data.Store",
    alias: "store.WorkerStore",
    model: "MyApp.model.WorkerModel",
    pageSize: 1E4,
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dworkerlist_pc",
            update: sys_ActionPHP + "?act\x3dworkersave",
            create: sys_ActionPHP + "?act\x3dworkernew",
            destroy: sys_ActionPHP + "?act\x3dworkerdelete"
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
            Jobs: "1"
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    },
    autoLoad: true
});