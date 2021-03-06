Ext.define("MyApp.model.LocationModel",
{
    extend: "Ext.app.ViewModel",
    extend: "Ext.data.Model",
    alias: "viewmodel.LocationModel",
    fields: [
    {
        name: "id",
        type: "int"
    },
    {
        name: "E_code"
    },
    {
        name: "L_code"
    },
    {
        name: "L_name"
    },
    {
        name: "L_shortname"
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