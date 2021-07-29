Ext.define('MyApp.view.main.tree.QueryCkmc',
{
    extend: 'Ext.container.Container',
    alias: 'widget.QueryCkmc',
    itemId: 'QueryCkmc',
    layout: 'hbox',
    defaults:
    {
        border: 0,
        cls: 'x-btn-text-icon details',
        disabled: false
    },
    flex: 1,
    items: [
    {
        labelWidth: 60,
        xtype: 'triggerfield',
        fieldLabel: '仓库名称',
        itemId: 'textQueryCkmc',
        bind: '{ckmc}',
        margin: '1 0 1 10',
        flex: 1,
        triggerCls: 'x-form-clear-trigger',
        onTriggerClick: function ()
        {
            this.reset();
            that.getView().getViewModel().set('ckid', 0);
        }
    },
    {
        xtype: 'button',
        itemId: 'btnQueryCkmc',
        margin: '1 5 1 0',
        text: '...',
        width: 30
    },
    {
        xtype: 'textfield',
        hidden: true,
        width: 40,
        itemId: 'textQueryCkid',
        bind: '{ckid}'
    }]
});