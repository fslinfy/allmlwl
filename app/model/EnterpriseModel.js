Ext.define("MyApp.model.EnterpriseModel",
{
    extend: "Ext.app.ViewModel",
    extend: "Ext.data.Model",
    alias: "viewmodel.EnterpriseModel",
    fields: [
    {
        name: "id"
    },
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