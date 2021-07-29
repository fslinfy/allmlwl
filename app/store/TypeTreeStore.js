Ext.define("MyApp.store.CommodityTypeTreeStore",
{
    extend: "Ext.data.TreeStore",
    alias: "store.files",
    type: "tree",
    proxy:
    {
        type: "ajax",
        url: sys_ActionPHP + "?act\x3dtypetreelist"
    },
    root:
    {
        expanded: true,
        draggable: false
    },
    autoLoad: true
});