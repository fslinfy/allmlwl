Ext.define("MyApp.store.TreeStore",
{
    extend: "Ext.data.Store",
    itemId: "selectCkbmTreeStore",
    type: "tree",
    alias: "store.TreeStore",
    proxy:
    {
        type: "ajax",
        url: sys_ActionPHP +"?act\x3dlocationselecttreelist"
    },
    root:
    {
        text: "\u5168\u90e8",
        id: "ALL",
        code: "",
        Py_code: "",
        expanded: true,
        draggable: false
    },
    autoLoad: true
});