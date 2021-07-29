var that;
Ext.define('MyApp.view.main.cwgl.CwsjlocCtrl',
{
    extend: 'Ext.app.ViewController',
    alias: 'controller.CwsjlocCtrl',
    requires: [
        'MyApp.view.main.cwgl.CwsjlocView'
    ],
    locQuery: function (th)
        {
            var v = that.viewname.getViewModel();
            start_date = v.get('start_date');
            end_date = v.get('end_date');
            var d1 = Ext.Date.format(start_date, 'Y-m-d');
            var d2 = Ext.Date.format(end_date, 'Y-m-d');
            var store = that.viewname.getStore();
            store.proxy.extraParams.shzt = 1;
            store.proxy.extraParams.startdate = d1;
            store.proxy.extraParams.enddate = d2;
            store.proxy.extraParams.p_l_id = sys_location_id;
            store.reload();
        },
        onBtnQueryClick: function (button, e, options)
        {
            this.locQuery(this)
            return false;
        },
        onItemSelected: function (sender, record)
        {
            var tool = this.getView().down("#QueryToolbarView");
            tool.down('#btnEdit').setDisabled(false);
            tool.down('#btnDelete').setDisabled(false);

            return false;
        },
        onBtnHelpClick: function (button, e, options)
        {
            return false;
        },
        onBeforeReload: function (store, records, options)
        {
            var store = this.getView().getStore();
            return storeBeforeReload(this, store);
        },
        init: function ()
        {
            that = this;
            var tool = this.getView().down("#QueryToolbarView");
            tool.down('#btnNew').setHidden(true);
            tool.down('#btnSave').setHidden(true);
            tool.down('#btnDelete').setHidden(true);
            tool.down('#btnUndo').setHidden(true);
            this.control(
            {
                "#btnQuery":
                {
                    click: this.onBtnQueryClick
                },
                "#btnHelp":
                {
                    click: this.onBtnHelpClick
                },
                "#FilterField":
                {
                    change: this.onFilterChange
                }
            });
            that.viewname = that.getView();
            var v = that.viewname.getViewModel();
            v.set('start_date', start_date);
            v.set('end_date', end_date);
            that.viewname.down('#QueryDate').setHidden(false);
            this.locQuery(this)
        },
        onFilterChange: function (v)
        {
            var store = this.getView().getStore()
            var regExp = new RegExp(".*" + v.rawValue + ".*");
            store.clearFilter();
            store.filterBy(function (record, id)
            {
                return regExp.test(record.get('khmc')) || regExp.test(record.get('cwzy'));
            });
        }
})