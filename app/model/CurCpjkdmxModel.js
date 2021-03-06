Ext.define("MyApp.model.CurCpjkdmxModel",
{
    extend: "Ext.app.ViewModel",
    extend: "Ext.data.Model",
    alias: "viewmodel.CurCpjkdmxModel",
    fields: [
    {
        name: "id"
    },
    {
        name: "jkdh"
    },
    {
        name: "mxdh"
    },
    {
        name: "cdh"
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
        name: "mints",
        type: "int"
    },
    {
        name: "jcsl",
        type: "float"
    },
    {
        name: "jczl",
        type: "float"
    },
    {
        name: "jcje",
        type: "float"
    },
    {
        name: "czdj",
        type: "float"
    },
    {
        name: "phdj",
        type: "float"
    },
    {
        name: "rate",
        type: "float"
    },
    {
        name: "xjje",
        type: "float"
    },
    {
        name: "bydj",
        type: "float"
    },
    {
        name: "cpgg"
    },
    {
        name: "cpph"
    },
    {
        name: "jldw"
    },
    {
        name: "sldw"
    },
    {
        name: "zldw"
    },
    {
        name: "gs"
    },
    {
        name: "cg"
    },
    {
        name: "byg"
    },
    {
        name: "area"
    },
    {
        name: "zljs",
        type: "bool"
    },
    {
        name: "jkdid",
        type: "int"
    },
    {
        name: "mxdh"
    },
    {
        name: "cpjkdcw"
    }],
    proxy:
    {
        type: "sessionstorage",
        id: "CurCpjkdmxModel"
    }
});