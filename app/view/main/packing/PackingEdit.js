Ext.define("MyApp.view.main.packing.PackingEdit",
{
    extend: "Ext.window.Window",
    xtype: "formwindow",
    reference: "popupWindow",
    bind:
    {
        title: "{title}"
    },
    width: 300,
    height: 300,
    minWidth: 200,
    minHeight: 120,
    layout: "fit",
    closeAction: "destroy",
    bodyPadding: 20,
    plain: true,
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
            visiable: false,
            hidden: true,
            bind: "{id}"
        },
        {
            fieldLabel: "\u4ee3\u7801",
            regex: /(^[0-9A-Z]{1,5}$)/,
            width: 20,
            maxLength: 5,
            allowBank: false,
            name: "PS_code",
            reference: "PS_code",
            bind: "{PS_code}"
        },
        {
            fieldLabel: "\u540d\u79f0",
            allowBank: false,
            name: "Ps_name",
            reference: "PS_name",
            bind: "{PS_name}"
        },
        {
            xtype: "checkbox",
            fieldLabel: "\u6d3b\u8dc3",
            bind: "{Active}"
        }]
    }],
    buttons: [
    {
        text: "\u4fdd\u5b58",
        icon: "images/right.gif",
        handler: "onFormSubmit"
    },
    {
        text: "\u653e\u5f03",
        icon: "images/close.gif",
        handler: "onFormCancel"
    }]
});