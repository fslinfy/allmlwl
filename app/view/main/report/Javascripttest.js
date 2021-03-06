var areaArray = [];
var ckmc = "";
var cur = 0;
Ext.define('MyApp.view.main.report.Javascripttest',
{
    extend: 'Ext.Mixin'
});

function jstest()
{
    var el = document.getElementById("LocationGrid");
    var el1 = document.getElementById("FilterField");
    var el0 = el1.parentNode;
    el0.removeChild(el1);
    var grid = jQuery("#gridtable");
    grid.jqGrid(
    {
        datatype: "local",
        height: 250,
        colNames: ['Inv No', 'Date', 'Natural Sort order', 'Amount', 'Tax', 'Total', 'String Sort'],
        colModel: [
        {
            name: 'id',
            index: 'id',
            width: 60,
            sorttype: "int"
        },
        {
            name: 'invdate',
            index: 'invdate',
            width: 90,
            sorttype: "date"
        },
        {
            name: 'name',
            index: 'name',
            width: 150,
            sortfunc: naturalSort
        },
        {
            name: 'amount',
            index: 'amount',
            width: 80,
            align: "right",
            sorttype: "float"
        },
        {
            name: 'tax',
            index: 'tax',
            width: 80,
            align: "right",
            sorttype: "float"
        },
        {
            name: 'total',
            index: 'total',
            width: 80,
            align: "right",
            sorttype: "float"
        },
        {
            name: 'note',
            index: 'note',
            width: 150,
            sortable: "string"
        }],
        multiselect: true,
        caption: "jqrid"
    });
    var mydata = [
    {
        id: "1",
        invdate: "2013-10-01",
        name: "atest",
        note: "atest",
        amount: "200.00",
        tax: "10.00",
        total: "210.00"
    },
    {
        id: "2",
        invdate: "2013-10-02",
        name: "Atest",
        note: "Atest",
        amount: "300.00",
        tax: "20.00",
        total: "320.00"
    },
    {
        id: "3",
        invdate: "2013-09-01",
        name: "test2",
        note: "test2",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    },
    {
        id: "4",
        invdate: "2013-10-04",
        name: "test",
        note: "test",
        amount: "200.00",
        tax: "10.00",
        total: "210.00"
    },
    {
        id: "5",
        invdate: "2013-10-05",
        name: "test2A",
        note: "test2A",
        amount: "300.00",
        tax: "20.00",
        total: "320.00"
    },
    {
        id: "6",
        invdate: "2013-09-06",
        name: "test2a",
        note: "test2a",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    },
    {
        id: "7",
        invdate: "2013-10-04",
        name: "Test",
        note: "Test",
        amount: "200.00",
        tax: "10.00",
        total: "210.00"
    },
    {
        id: "8",
        invdate: "2013-10-03",
        name: "2",
        note: "2",
        amount: "300.00",
        tax: "20.00",
        total: "320.00"
    },
    {
        id: "9",
        invdate: "2013-09-01",
        name: "1",
        note: "1",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    },
    {
        id: "10",
        invdate: "2013-09-01",
        name: "test34",
        note: "test34",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    },
    {
        id: "9",
        invdate: "2013-09-01",
        name: "1test",
        note: "1test",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    },
    {
        id: "11",
        invdate: "2013-09-01",
        name: "10",
        note: "10",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    },
    {
        id: "12",
        invdate: "2013-09-01",
        name: "test33",
        note: "test33",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    },
    {
        id: "13",
        invdate: "2013-09-01",
        name: "Test1",
        note: "Test1",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    },
    {
        id: "14",
        invdate: "2013-09-01",
        name: "BTest",
        note: "BTest",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    },
    {
        id: "15",
        invdate: "2013-09-01",
        name: "3",
        note: "3",
        amount: "400.00",
        tax: "30.00",
        total: "430.00"
    }];
    for (var i = 0; i < mydata.length; i++)
    {
        grid.jqGrid('addRowData', i + 1, mydata[i]);
    }

}