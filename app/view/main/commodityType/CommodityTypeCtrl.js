var p_t_id = 0;
Ext.define('MyApp.view.main.commodityType.CommodityTypeCtrl',
{
    extend: 'Ext.app.ViewController',
    alias: 'controller.CommodityTypeCtrl',
    requires: [
        'MyApp.view.main.commodityType.CommodityTypeView'
    ],
    onBtnQueryClick: function (button, e, options)
        {
            this.getView().down("#CommodityTypeGridView").getStore().load();
            return false;
        },
        onSelectionchange: function (model, record) {},
        onItemSelected: function (sender, record)
        {
            console.log(2, record);
            var tool = this.getView().down("#QueryToolbarView");
            tool.down('#btnEdit').setDisabled(false);
            tool.down('#btnDelete').setDisabled(false);
            return false;
        },
        onBtnNewClick: function (rs)
        {
            if (p_t_id > 0)
            {
                var store = this.getView().down("#CommodityTypeGridView").getStore();
                store.addSorted([
                {
                    E_code: sys_enterprise_code,
                    T_id: p_t_id
                }]);
            }
            return false;
        },
        onBtnDeleteClick: function (button, e, options)
        {
            var store = this.getView().down("#CommodityTypeGridView").getStore();
            var grid = Ext.getCmp('CommodityTypeGrid');
            return storeBtnDeleteClick(this, grid, store);
        },
        onBtnHelpClick: function (button, e, options)
        {
            console.log("help")
            return false;
        },
        onBtnSaveClick: function (button, e, options)
        {
            var store = this.getView().down("#CommodityTypeGridView").getStore();
            return storeBtnSaveClick(this, store);
        },
        onBtnUndoClick: function (button, e, options)
        {
            this.getView().down("#CommodityTypeGridView").getStore().rejectChanges();
            return false;
        },
        onBeforeReload: function (store, records, options)
        {
            var store = this.getView().down("#CommodityTypeGridView").getStore();
            return storeBeforeReload(this, store);
        },
        onBtnCancelClick: function (button, e, options)
        {
            var win = this.lookupReference('MyApp.view.main.commodityType.CommodityTypeEdit');
            win.close()
            return false;
        },
        init: function ()
        {
            var tool = this.getView().down("#QueryToolbarView");
            tool.down('#btnNew').setHidden(false);
            tool.down('#btnSave').setHidden(false);
            tool.down('#btnDelete').setHidden(false);
            tool.down('#btnUndo').setHidden(false);
            this.control(
            {
                "#btnQuery":
                {
                    click: this.onBtnQueryClick
                },
                "#button1":
                {
                    click: this.onButtonAddClick
                },
                "#btnNew":
                {
                    click: this.onBtnNewClick
                },
                "#btnSave":
                {
                    click: this.onBtnSaveClick
                },
                "#btnDelete":
                {
                    click: this.onBtnDeleteClick
                },
                "#btnHelp":
                {
                    click: this.onBtnHelpClick
                },
                "#btnUndo":
                {
                    click: this.onBtnUndoClick
                },
                "#Cancel":
                {
                    click: this.onBtnCancelClick
                },
                "#FilterField":
                {
                    change: this.onFilterChange
                },
                "#LeftTree":
                {
                    itemclick: this.onTreeSelected
                }
            });
            var store = this.getView().down("#CommodityTypeGridView").getStore();
            store.on('beforeload', this.onBeforeReload, this);
        },
        onFilterChange: function (v)
        {
            var store = this.getView().down("#CommodityTypeGridView").getStore()
            var regExp = new RegExp(".*" + v.rawValue + ".*");
            store.clearFilter();
            store.filterBy(function (record, id)
            {
                return regExp.test(record.get('CT_name')) || regExp.test(record.get('CT_code'));
            });
        },
        onTreeSelected: function (node, event)
        {
            this.getView().down("#FilterField").reset();
            var store = this.getView().down("#CommodityTypeGridView").getStore();
            store.clearFilter();
            store.proxy.extraParams.T_id = event.data.id;
            store.load();
        },
        onTreeAddClick: function ()
        {
            this.createDialog(
            {});
        },
        onTreeEditClick: function ()
        {
            var obj = {};
            var panel = this.getView().down('#LeftTree'),
                sm = panel.getSelectionModel(),
                node;
            if (sm.hasSelection())
            {
                node = sm.getSelection()[0];
                // console.log("node",node);
                obj["title"] = "编辑大类：" + node.data.text;
                obj["id"] = node.data.id;
                obj["T_code"] = node.data.T_code;
                obj["T_name"] = node.data.text;
                obj["Active"] = node.data.Active;
                this.createDialog(obj);
            }
        },
        createDialog: function (record)
        {
            var view = this.getView();
            this.isEdit = !!record;
            this.dialog = view.add(
            {
                xtype: 'formwindow',
                viewModel:
                {
                    data: record
                },
                session: true
            });
            this.dialog.show();
        },
        onFormCancel: function (event)
        {
            this.lookupReference('windowForm').getForm().reset();
            this.lookupReference('popupWindow').hide();
        },
        onFormSubmit: function ()
        {
            var formPanel = this.lookupReference('windowForm'),
                form = formPanel.getForm();
            if (form.isValid())
            {
                //******************************* */
                Ext.Ajax.request(
                {
                    method: 'POST',
                    url: sys_ActionPHP + '?act=save_type_test',
                    scope: this,
                    params: form.getValues(),
                    success: function (response)
                        {
                            var result = Ext.decode(response.responseText);
                            console.log(result);
                            if (result.success)
                            {
                                console.log(result.data);
                            }
                            else
                            {
                                console.log('错误', '数据保存失败！');
                            }
                        },
                        failure: function ()
                        {
                            console.log('错误', '发生错误！');
                        }
                });
                //******************************* */
                form.reset();
                this.lookupReference('popupWindow').hide();
            }
        }
});