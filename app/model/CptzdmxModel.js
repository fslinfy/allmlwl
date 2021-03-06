Ext.define("MyApp.model.CptzdmxModel",
{
    extend: "Ext.app.ViewModel",
    extend: "Ext.data.Model",
    alias: "viewmodel.CptzdmxModel",
    fields: [
    {
        name: "id",
        type: "int"
    },
    {
        name: "mxid",
        type: "int"
    },
    {
        name: "tzid",
        type: "int"
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
        name: "cpgg"
    },
    {
        name: "jldw"
    },
    {
        name: "mints",
        type: "int"
    },
    {
        name: "kcid",
        type: "int"
    },
    {
        name: "mxkcid",
        type: "int"
    },
    {
        name: "kcmxid",
        type: "int"
    },
    {
        name: "tzsl",
        type: "float"
    },
    {
        name: "tzzl",
        type: "float"
    },
    {
        name: "tzje",
        type: "float"
    },
    {
        name: "xjje",
        type: "float"
    },
    {
        name: "area"
    },
    {
        name: "cw"
    },
    {
        name: "sm"
    },
    {
        name: "cpph"
    },
    {
        name: "czdj",
        type: "float"
    },
    {
        name: "czrq",
        type: "date"
    },
    {
        name: "newcw"
    },
    {
        name: "newsm"
    },
    {
        name: "newcpph"
    },
    {
        name: "newczdj",
        type: "float"
    },
    {
        name: "newczrq",
        type: "date",
        dateFormat: "Y-m-d"
    },
    {
        name: "zlhs",
        type: "bool"
    },
    {
        name: "zldw"
    },
    {
        name: "sldw"
    },
    {
        name: "kcsl",
        type: "float"
    },
    {
        name: "kczl",
        type: "float"
    }]
});