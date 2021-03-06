Ext.define("MyApp.model.CommodityTypeModel",
{
    extend: "Ext.app.ViewModel",
    extend: "Ext.data.Model",
    alias: "viewmodel.CommodityTypeModel",
    fields: [
    {
        name: "id",
        type: "int"
    },
    {
        name: "E_code"
    },
    {
        name: "CT_code"
    },
    {
        name: "CT_name"
    },
    {
        name: "Active",
        type: "bool"
    }]
});