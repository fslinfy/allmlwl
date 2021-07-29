Ext.define("MyApp.view.main.commodity.CommodityTypeEdit",
{
    extend: "Ext.window.Window",
    xtype: "formtypewindow",
    reference: "popupWindow",
    bind:
    {
        title: "{title}"
    },
    title: "\u7f16\u8f91\u8d44\u6599",
    width: 300,
    height: 250,
    minWidth: 200,
    minHeight: 120,
    layout: "fit",
    closeAction: "destroy",
    bodyPadding: 20,
    plain: true,
    modal: true,
    items: [
    {
        xtype: "form",
        reference: "windowForm",
        defaultType: "textfield",
        fieldDefaults:
        {
            labelWidth: 40,
            frame: true
        },
        layout:
        {
            type: "vbox",
            align: "stretch"
        },
        bodyPadding: 5,
        border: false,
        items: [
        {
            fieldLabel: "id",
            name: "id",
            hidden: true,
            bind: "{id}"
        },
        {
            fieldLabel: "T_id",
            name: "T_id",
            hidden: true,
            bind: "{T_id}"
        },
        {
            fieldLabel: "table",
            name: "table",
            hidden: true,
            bind: "{table}"
        },
        {
            fieldLabel: "\u4ee3\u7801",
            regex: /(^[0-9A-Za-z]{1,5}$)/,
            width: 20,
            maxLength: 5,
            allowBank: false,
            name: "code",
            bind: "{code}"
        },
        {
            fieldLabel: "\u540d\u79f0",
            allowBank: false,
            name: "name",
            bind: "{name}"
        },
        {
            xtype: "checkbox",
            fieldLabel: "\u6d3b\u8dc3",
            name: "Active",
            bind: "{Active}",
            reference: "Activecheckbox"
        }]
    }],
    buttons: [
    {
        text: "\u4fdd\u5b58",
        icon: "images/right.gif",
        handler: "onFormSubmit"
    },
    {
        text: "\u5220\u9664",
        icon: "images/delete.gif",
        reference: "btnDeleteButton",
        handler: "onFormDelete"
    },
    {
        text: "\u653e\u5f03",
        icon: "images/close.gif",
        handler: "onFormCancel"
    }]
});