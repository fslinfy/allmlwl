Ext.define("MyApp.store.JobsStore",
{
    extend: "Ext.data.Store",
    alias: "store.JobsStore",
    pageSize: 1E4,
    model: "MyApp.model.JobsModel",
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act=jobslist",
            update: sys_ActionPHP + "?act=jobssave"
        },
        actionMethods:
        {
            read: "GET",
            update: "POST"
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
            rootProperty: "rows",
            totalProperty: "results"
        }
    },
    autoLoad: true
});