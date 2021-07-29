Ext.define('KiMyApp.view.main.pivot.Sales',
{
    extend: 'Ext.data.Store',
    alias: 'store.sales',
    model: 'MyApp.view.main.pivot.Sale',
    proxy:
    {
        type: 'ajax',
        limitParam: null,
        url: 'MyApp/SalesData',
        reader:
        {
            type: 'json'
        }
    },
    autoLoad: true
});