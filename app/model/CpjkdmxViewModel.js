Ext.define("MyApp.model.CpjkdmxViewModel",
{
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.CpjkdmxViewModel",
    stores:
    {
        CpjkdmxStores:
        {
            model: "MyApp.model.CurCpjkdmxModel",
            autoLoad: true,
            session: true
        }
    }
});