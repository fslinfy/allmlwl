Ext.define("MyApp.store.CommodityTypeStore",
{
    extend: "Ext.data.Store",
    alias: "store.CommodityTypeStore",
    model: "MyApp.model.CommodityTypeModel",
    pageSize: 1E4,
    proxy:
    {
        type: "ajax",
        api:
        {
            read: sys_ActionPHP + "?act\x3dcommoditytypelist_pc",
            update: sys_ActionPHP + "?act\x3dcommoditytypesave",
            create: sys_ActionPHP + "?act\x3dcommoditytypenew",
            destroy: sys_ActionPHP + "?act\x3dcommoditytypedelete"
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
            T_id: 1
        },
        reader:
        {
            type: "json",
            rootProperty: "rows"
        }
    },
    autoLoad: true
});