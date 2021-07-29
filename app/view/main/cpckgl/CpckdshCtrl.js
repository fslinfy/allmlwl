var that;
var cpckdmxStore;
var issave = false;
var ckshsaveCallBack = function (th)
{
    var p = th.lookupReference('popupCpckdWindow');
    var mckid = that.ckid;
    if (th.loc == "ok")
    {
        // 发信息
        Ext.Ajax.request(
        {
            method: 'GET',
            url: "qcloudsmssend.php",
            params:
            {
                act: 'cpckd',
                userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                id: mckid
            },
            scope: this,
            success: function (response)
            {
                var result = Ext.decode(response.responseText);
                if (result.result == 'success')
                {}
                else
                {
                    Ext.MessageBox.alert('提示!', result.msg);
                }
            }
        });
        Ext.MessageBox.show(
        {
            title: "提示",
            msg: "打印商品出仓单",
            buttons: Ext.MessageBox.YESNO,
            buttonText:
            {
                yes: "确认打印",
                no: "放  弃"
            },
            icon: Ext.MessageBox["WARNING"],
            scope: this,
            fn: function (btn, text)
            {
                if (btn == "yes")
                {
                    PrintCpckdckid(mckid);
                }
                p.close();
                th.locQuery(th)
            }
        });
    }
    else
    {
        p.close();
        th.locQuery(th)
    }
}
Ext.define('MyApp.view.main.cpckgl.CpckdshCtrl',
{
    extend: 'Ext.app.ViewController',
    alias: 'controller.CpckdshCtrl',
    requires: [
        'MyApp.view.main.cpckgl.CpckdshView',
        'MyApp.view.main.tree.WorkerSelectTree'
    ],
    locQuery: function (that)
        {
            var v = that.viewname.getViewModel();
            var khid = v.get('khid');
            var ckid = v.get('ckid');
            cpckdmxStore.proxy.extraParams.loc = "cpckdmxsh";
            cpckdmxStore.proxy.extraParams.khid = khid;
            cpckdmxStore.proxy.extraParams.l_id = ckid;
            cpckdmxStore.reload();
        },
        onBtnQueryClick: function (button, e, options)
        {
            this.locQuery(this);
        },
        init: function ()
        {
            that = this;
            that.viewname = that.getView().down("#CpckdListGrid");
            var v = that.viewname.getViewModel();
            if (sys_location_id > 0)
            {
                v.set('ckmc', sys_location_name);
                v.set('ckid', sys_location_id);
            }
            if (sys_customer_id > 0)
            {
                v.set('khmc', sys_customer_name);
                v.set('khid', sys_customer_id);
            }
            cpckdmxStore = Ext.create('Ext.data.Store',
            {
                alias: 'store.cpckdmxStore',
                model: 'MyApp.model.CpckdmxModel',
                proxy:
                {
                    type: 'ajax',
                    api:
                    {
                        read: sys_ActionPHP + '?act=cpckdmxlist_pc'
                    },
                    actionMethods:
                    {
                        read: 'GET'
                    },
                    extraParams:
                    {
                        loc: "cpckdmxsh",
                        userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                        p_e_code: sys_enterprise_code,
                        p_l_id: sys_location_id
                    },
                    reader:
                    {
                        type: 'json',
                        rootProperty: 'rows'
                    }
                }
            });
            cpckdmxStore.on("load", function ()
            {
                var v = that.viewname.getViewModel();
                var khid = v.get('khid');
                var ckid = v.get('ckid');
                var store = that.viewname.getStore();
                store.proxy.extraParams.loc = 'cpckdsh';
                store.proxy.extraParams.khid = khid;
                store.proxy.extraParams.l_id = ckid;
                store.reload();
            });
            that.listmxstore = cpckdmxStore;
            that.liststore = that.viewname.getStore();
            this.locQuery(this);
            this.control(
            {
                "#btnQuery":
                {
                    click: this.onBtnQueryClick
                },
                "#btnCpckdSave":
                {
                    click: this.onCpckdshOkSubmit
                },
                "#btnQueryKhmc":
                {
                    click: function ()
                    {
                        SelectKhbmView();
                    }
                },
                "#btnPrintCpckd":
                {
                    click: function ()
                    {
                        onPrintCpckd();
                    }
                },
                "#btnQueryCkmc":
                {
                    click: function ()
                    {
                        SelectCkbmView();
                    }
                },
                "#btnCpckdDelete":
                {
                    click: this.onCpckdshDeleteSubmit
                },
                "#FilterField":
                {
                    change: this.onFilterChange //function () { FilterChange(); }
                }
            });
            if (sys_customer_id > 0)
            {
                that.getView().down('#QueryKhmc').setHidden(true);
                that.getView().down('#QueryCkmc').setHidden(false);
            }
            else
            {
                that.getView().down('#QueryKhmc').setHidden(false);
                that.getView().down('#QueryCkmc').setHidden(true);
                if (sys_location_id > 0)
                {
                    that.getView().down('#QueryKhmc').setHidden(false);
                    that.getView().down('#QueryCkmc').setHidden(true);
                }
                else
                {
                    that.getView().down('#QueryKhmc').setHidden(true);
                    that.getView().down('#QueryCkmc').setHidden(false);
                }
            }
            that.viewname.getViewModel().set('PageTitleName', '商品出仓单业务审核');
        },
        onFilterChange: function (v)
        {
            var store = that.viewname.getStore()
            var regExp = new RegExp(".*" + v.rawValue + ".*");
            store.clearFilter();
            store.filterBy(function (record, id)
            {
                return regExp.test(record.get('ckdh')) || regExp.test(record.get('xsdh')) || regExp.test(record.get('khmc')) || regExp.test(record.get('cKmc'));
            });
        },
        onCpckdmxShowView: function (button)
        {
            var rec = button.getWidgetRecord();
            issave = false;
            var ckid = rec.data.ckid;
            var record = rec.data;
            record['op'] = 'sh';
            record['gsop'] = false;
            record["w"] = 0;
            record['btnButtonHidden'] = false;
            record['title'] = '商品出库单-审核';
            var view = this.getView();
            this.isEdit = false; // !!record;
            this.dialog = view.add(
            {
                xtype: 'cpckformwindow',
                viewModel:
                {
                    data: record
                },
                session: true
            });
            this.dialog.show();
            var cpckdmx_store = this.lookupReference('CpckdmxGrid').getStore();
            var p = this.lookupReference('popupCpckdWindow');
            p.down("#btnCpckdSave").setHidden(!sys_system_sh);
            p.down("#btnCpckdDelete").setHidden(!sys_system_del);
            p.down("#btnPrintCpckd").setHidden(true);
            var cpckdcw_store = that.lookupReference('cpckdmxcw0').getStore();
            cpckdcw_store.proxy.extraParams.ckid = ckid;
            cpckdcw_store.proxy.extraParams.loc = 'ckid';
            cpckdcw_store.load();
            var cpckdmx_store = that.lookupReference('CpckdmxGrid').getStore();
            cpckdmx_store.on("load", function ()
            {
                var mxid = cpckdmx_store.getAt(0).get('mxid');
                cpckdcw_store.clearFilter();
                cpckdcw_store.filterBy(function (record, id)
                {
                    return record.get('ckmxid') == mxid;
                });
            })
            cpckdmx_store.proxy.extraParams.ckid = ckid;
            cpckdmx_store.load();
        },
        onGridReload: function ()
        {
            var store = that.lookupReference('CpckdmxGrid').getStore();
            var mxid = store.getAt(0).get('mxid');
            var cpckdcw_store = that.lookupReference('cpckdmxcw0').getStore();
            cpckdcw_store.clearFilter();
            cpckdcw_store.filterBy(function (record, id)
            {
                return record.get('ckmxid') == mxid;
            });
        },
        onCpckdmxItemSelected: function (sender, record)
        {
            var cpckdcw_store = that.lookupReference('cpckdmxcw0').getStore();
            var mxid = record.data.mxid
            cpckdcw_store.clearFilter();
            cpckdcw_store.filterBy(function (record, id)
            {
                return record.get('ckmxid') == mxid;
            });
        },
        onSelectWorkerView: function (button)
        {
            var rec = button.getWidgetRecord();
            console.log(rec);
            SelectWorkerView(button);
        },
        onWorkerSelectOkClick: function ()
        {
            WorkerSelectOkClick();
        },
        khmcTriggerClick: function (record)
        {
            that.onBtnQueryClick();
            return false;
        },
        ckmcTriggerClick: function (record)
        {
            that.onBtnQueryClick();
            return false;
        },
        onCpckdshOkSubmit: function ()
        {
            that.CpckdshSave('ok', this);
        },
        onCpckdshDeleteSubmit: function ()
        {
            that.CpckdshSave('delete', this);
        },
        CpckdshSave: function (loc, the)
        {
            var p = the.lookupReference('popupCpckdWindow').getViewModel();
            var ckid = p.get('ckid');
            if (ckid == 0)
            {
                return;
            }
            if (issave) return;
            issave = true;
            the.lookupReference('popupCpckdWindow').down("#btnCpckdSave").setHidden(true);
            the.lookupReference('popupCpckdWindow').down("#btnCpckdDelete").setHidden(true);
            var gsby = [];
            var cksh = {};
            cksh["ckid"] = ckid;
            cksh["gsby"] = gsby;
            var msg = "出库单号：" + p.get('ckdh') + "<br>客户名称：" + p.get('khmc');
            var title = "真的取消此出库单内容？";
            if (loc == 'ok')
            {
                title = "真的业务审核通过此出库单内容？";
            }
            else
            {
                var rq = Ext.decode(Ext.encode(p.get('ckrq'))).substr(0, 10);
                var ctoday = Ext.Date.format(new Date(), 'Y-m-d');
                if ((rq < sys_option_min_date) && (ctoday >= sys_option_min_date))
                {
                 Ext.MessageBox.show(
                    {
                        title: "注意！",
                        msg: "此单是上月出库单，不能作删除处理！!！",
                        buttons: Ext.MessageBox.yes,
                        buttonText:
                        {
                            yes: "确认"
                        },
                        icon: Ext.MessageBox["WARNING"],
                        scope: this,
                        fn: function (btn, text)
                        {
                            the.lookupReference('popupCpckdWindow').down("#btnCpckdDelete").setHidden(!sys_system_del);
                            the.lookupReference('popupCpckdWindow').down("#btnCpckdSave").setHidden(!sys_system_sh);
                            issave = false;
                            return false;
                        }
                    });
                    return false
                }
            }
            that.loc = loc;
            that.ckid = ckid;
            Ext.MessageBox.show(
            {
                title: title,
                msg: msg,
                buttons: Ext.MessageBox.YESNO,
                buttonText:
                {
                    yes: "确 认",
                    no: "放 弃"
                },
                icon: Ext.MessageBox["WARNING"],
                scope: this,
                fn: function (btn, text)
                {
                    if (btn == "yes")
                    {
                        var str = obj2str(cksh);
                        var encodedString = base64encode(Ext.encode(str));
                        AjaxDataSave('cpckdshsave', loc, encodedString, ckshsaveCallBack, the);
                    }
                    else
                    {
                        that.lookupReference('popupCpckdWindow').down("#btnCpckdSave").setHidden(!sys_system_sh);
                        that.lookupReference('popupCpckdWindow').down("#btnCpckdDelete").setHidden(!sys_system_del);
                        issave = false;
                    }
                }
            });
        }
});