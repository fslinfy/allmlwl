Ext.define("MyApp.view.main.jobs.JobsCtrl",
{
    extend: "Ext.app.ViewController",
    alias: "controller.JobsCtrl",
    requires: ["MyApp.store.JobsStore",
        "MyApp.view.main.QueryToolbarView",
        "MyApp.view.main.jobs.JobsView"
    ],
    onBtnQueryClick: function (button, e, options)
        {
            this.getView().getStore().load();
            return false
        },
        onItemSelected: function (sender, record) {},
        onBtnHelpClick: function (button, e, options)
        {
            return false
        },
        onBtnSaveClick: function (button, e, options)
        {
            var store = this.getView().getStore();
            return storeBtnSaveClick(this, store)
        },
        onBtnUndoClick: function (button, e, options)
        {
            this.getView().getStore().rejectChanges();
            return false
        },
        onBeforeReload: function (store, records, options)
        {
            var store = this.getView().getStore();
            return storeBeforeReload(this, store)
        },
        onBtnCancelClick: function (button, e, options)
        {
            var win = this.lookupReference("popupWindow");
            win.close();
            return false
        },
        init: function ()
        {
            var tool = this.getView().down("#QueryToolbarView");
            tool.down("#btnSave").setHidden(false);
            this.control(
            {
                "#btnQuery":
                {
                    click: this.onBtnQueryClick
                },
                "#btnSave":
                {
                    click: this.onBtnSaveClick
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
            var store = this.getView().getStore();
            store.on("beforeload", this.onBeforeReload, this)
        },
        onFilterChange: function (v)
        {
            var store = this.getView().getStore();
            var regExp = new RegExp(".*" + v.rawValue + ".*");
            store.clearFilter();
            store.filterBy(function (record, id)
            {
                return regExp.test(record.get("JobsName"))
            })
        }
});