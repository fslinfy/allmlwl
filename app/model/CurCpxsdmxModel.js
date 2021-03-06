Ext.define("MyApp.model.CurCpxsdmxModel",
{
    extend: "Ext.app.ViewModel",
    extend: "Ext.data.Model",
    alias: "viewmodel.CurCpxsdmxModel",
    fields: [
    {
        name: "id",
        type: "int"
    },
    {
        name: "xsid",
        type: "int"
    },
    {
        name: "xsdh"
    },
    {
        name: "mxdh"
    },
    {
        name: "cdmc"
    },
    {
        name: "cdid",
        type: "int"
    },
    {
        name: "cpmc"
    },
    {
        name: "cpid",
        type: "int"
    },
    {
        name: "bzmc"
    },
    {
        name: "bzid",
        type: "int"
    },
    {
        name: "kcid",
        type: "int"
    },
    {
        name: "jldw"
    },
    {
        name: "xssl",
        type: "float"
    },
    {
        name: "xszl",
        type: "float"
    },
    {
        name: "xsdj",
        type: "float"
    },
    {
        name: "xsje",
        type: "float"
    },
    {
        name: "ccsl",
        type: "float"
    },
    {
        name: "cczl",
        type: "float"
    },
    {
        name: "cpgg"
    },
    {
        name: "cpph"
    },
    {
        name: "zlhs",
        type: "bool"
    },
    {
        name: "sl",
        type: "float"
    },
    {
        name: "zl",
        type: "float"
    }],
    proxy:
    {
        type: "sessionstorage",
        id: "CurCpxsdmxModel"
    }
});