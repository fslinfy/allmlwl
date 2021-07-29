Ext.define("MyApp.store.SelectTreeStore",
{
    extend: "Ext.data.Store",
    alias: "store.SelectTreeStore",
    model: "MyApp.model.SelectTreeModel",
    proxy:
    {
        type: "ajax",
        reader: "json",
        url: ""
    },
    lazyFill: false
});