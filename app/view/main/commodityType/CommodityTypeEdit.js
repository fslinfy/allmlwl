Ext.define('MyApp.view.main.commodityType.CommodityTypeEdit',
{
    extend: "Ext.window.Window",
    xtype: 'formwindow',
    reference: 'popupWindow',
    bind:
    {
        title: '{title}'
    },
    title: '编辑资料',
    width: 300,
    height: 300,
    minWidth: 200,
    minHeight: 120,
    layout: 'fit',
    closeAction: 'destroy',
    bodyPadding: 20,
    plain: true,
    items: [
    {
        xtype: 'form',
        reference: 'windowForm',
        defaultType: 'textfield',
        fieldDefaults:
        {
            labelWidth: 40,
            frame: true
        },
        layout:
        {
            type: 'vbox',
            align: 'stretch'
        },
        bodyPadding: 5,
        border: false,
        items: [
        {
            fieldLabel: 'id',
            name: 'id',
            hidden: true,
            bind: '{id}'
        },
        {
            fieldLabel: '代码',
            regex: /(^[0-9A-Z]{1,5}$)/,
            width: 20,
            maxLength: 5,
            allowBank: false,
            name: 'T_code',
            bind: '{T_code}'
        },
        {
            fieldLabel: '名称',
            allowBank: false,
            name: 'T_name',
            bind: '{T_name}'
        },
        {
            xtype: 'checkbox',
            fieldLabel: '活跃',
            name: 'Active',
            bind: '{Active}'
        }]
    }],
    buttons: [
    {
        text: '保存',
        handler: 'onFormSubmit'
    },
    {
        text: '放弃',
        handler: 'onFormCancel'
    }]
});