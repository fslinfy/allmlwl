Ext.define('MyApp.view.main.pivot.PivotView',
{
    extend: 'Ext.pivot.Grid',
    xtype: 'PivotView',
    controller: 'pivotexport',
    requires: [
        'MyApp.view.main.pivot.ExporterController',
        'MyApp.view.main.pivot.Sales',
        'Ext.pivot.plugin.Exporter'
    ],
    otherContent: [
    {
        type: 'Controller',
        path: 'view/main/pivot/ExporterController.js'
    },
    {
        type: 'Model',
        path: 'view/main/pivot/Sale.js'
    },
    {
        type: 'Store',
        path: 'view/main/pivot/Sales.js'
    }],
    profiles:
    {
        classic:
        {
            width: 600
        },
        neptune:
        {
            width: 750
        }
    },
    title: 'Pivot Grid with Exporter plugin',
    width: '${width}',
    height: 350,
    collapsible: true,
    multiSelect: true,
    selModel:
    {
        type: 'spreadsheet'
    },
    plugins: [
    {
        ptype: 'pivotexporter'
    }],
    matrix:
    {
        type: 'local',
        store:
        {
            type: 'sales'
        },
        aggregate: [
        {
            dataIndex: 'value',
            header: 'Total',
            aggregator: 'sum',
            exportStyle: [
            {
                format: 'Currency',
                alignment:
                {
                    horizontal: 'Right'
                }
            },
            {
                type: 'html',
                format: 'Currency',
                alignment:
                {
                    horizontal: 'Right'
                },
                font:
                {
                    bold: true,
                    italic: true
                }
            }]
        }],
        leftAxis: [
        {
            dataIndex: 'person',
            header: 'Person'
        },
        {
            dataIndex: 'company',
            header: 'Company',
            sortable: false
        }],
        topAxis: [
        {
            dataIndex: 'year',
            header: 'Year'
        },
        {
            dataIndex: 'country',
            header: 'Country'
        }]
    },
    listeners:
    {
        documentsave: 'onDocumentSave',
        beforedocumentsave: 'onBeforeDocumentSave'
    },
    header:
    {
        itemPosition: 1,
        items: [
        {
            ui: 'default-toolbar',
            xtype: 'button',
            text: 'Export to ...',
            menu:
            {
                items: [
                {
                    text: 'Excel xlsx (all items)',
                    handler: 'exportAllToXlsx'
                },
                {
                    text: 'Excel xlsx (visible items)',
                    handler: 'exportVisibleToXlsx'
                },
                {
                    text: 'Excel xml (all items)',
                    handler: 'exportAllToXml'
                },
                {
                    text: 'Excel xml (visible items)',
                    handler: 'exportVisibleToXml'
                },
                {
                    text: 'CSV (all items)',
                    handler: 'exportAllToCSV'
                },
                {
                    text: 'CSV (visible items)',
                    handler: 'exportVisibleToCSV'
                },
                {
                    text: 'TSV (all items)',
                    handler: 'exportAllToTSV'
                },
                {
                    text: 'TSV (visible items)',
                    handler: 'exportVisibleToTSV'
                },
                {
                    text: 'HTML (all items)',
                    handler: 'exportAllToHtml'
                },
                {
                    text: 'HTML (visible items)',
                    handler: 'exportVisibleToHtml'
                }]
            }
        }]
    }
});