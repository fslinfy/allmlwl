Ext.define("MyApp.model.WorkerModel",
{
    extend: "Ext.app.ViewModel",
    extend: "Ext.data.Model",
    alias: "viewmodel.WorkerModel",
    fields: [
    {
        name: "id",
        type: "int"
    },
    {
        name: "E_code"
    },
    {
        name: "Jobs"
    },
    {
        name: "Jobsname"
    },
    {
        name: "Name"
    },
    {
        name: "Tel"
    },
    {
        name: "L_id",
        type: "int"
    },
    {
        name: "Active",
        type: "bool"
    }]
});