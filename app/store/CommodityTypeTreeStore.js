Ext.define("MyApp.store.CommodityTypeTreeStore",
{
    extend: "Ext.data.TreeStore",
    alias: "store.files",
    pageSize: 1E4,
    root:
    {
        expanded: true,
        children: [
        {
            text: "detention",
            leaf: true,
            isLayover: true
        },
        {
            text: "homework",
            expanded: true,
            leaf: false,
            children: [
            {
                text: "book report",
                leaf: true
            },
            {
                text: "algebra",
                leaf: true
            }]
        },
        {
            text: "buy lottery tickets",
            leaf: true,
            isLayover: true
        }]
    }
});