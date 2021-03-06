Ext.define("MyApp.model.TypeModel",
{
    extend: "Ext.app.ViewModel",
    extend: "Ext.data.Model",
    alias: "viewmodel.TypeModel",
    fields: [
    {
        name: "id",
        type: "int"
    },
    {
        name: "E_code"
    },
    {
        name: "T_code"
    },
    {
        name: "T_name"
    },
    {
        name: "Active",
        type: "bool"
    }]
});