Ext.define('MyApp.store.CktjjdStore',
{
    extend: 'Ext.data.Store',
    alias: 'store.CktjjdStore',
    model: 'MyApp.model.CktjjdModel',
    proxy:
    {
        type: 'ajax',
        api:
        {
            read: sys_ActionPHP + '?act=cktjjdlist',
            update: sys_ActionPHP + '?act=cktjjdsave'
        },
        actionMethods:
        {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'POST'
        },
        extraParams:
        {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            p_l_id: sys_location_id,
            ny: (new Date).getFullYear()
        },
        reader:
        {
            type: 'json',
            rootProperty: 'rows'
        }
    },
    autoLoad: true
});