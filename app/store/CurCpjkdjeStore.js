Ext.define("MyApp.store.CurCpjkdjeStore",
{
    extend: "Ext.data.Store",
    alias: "store.CurCpjkdjeStore",
    model: "MyApp.model.CpjkdjeModel",
    autoLoad: true,
    proxy:
    {
        type: "sessionstorage",
        id: "CurCpjkdjeModel"
    }
});