Ext.define("MyApp.model.CpjkdViewModel",
{
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.CpjkdViewModel",
    stores:
    {
        CpjkdStores:
        {
            model: "MyApp.model.CpjkdModel",
            autoLoad: true,
            session: true
        }
    }
});