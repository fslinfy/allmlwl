Ext.define("MyApp.model.enterprise",
{
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.enterprise",
    fields: [
    {
        name: "E_code"
    },
    {
        name: "E_name"
    },
    {
        name: "Address"
    },
    {
        name: "Tel"
    },
    {
        name: "Active",
        type: "bool"
    }]
});