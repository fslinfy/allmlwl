Ext.define("MyApp.store.CurCpjkdStore",
{
    extend: "Ext.data.Store",
    alias: "store.CurCpjkdStore",
    model: "MyApp.model.CpjkdModel",
    autoLoad: true,
    proxy:
    {
        type: "sessionstorage",
        id: "CurCpjkdModel"
    }
});