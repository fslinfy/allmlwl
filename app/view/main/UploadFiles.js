
Ext.define('MyApp.view.main.UploadFiles',
{
    extend: 'Ext.Mixin'
});
function uploadFile(dhlb, dhid, CallBackFunction)
{
    uploadForm = new Ext.form.FormPanel(
    {
        labelAlign: 'left',
        buttonAlign: 'center',
        bodyStyle: 'padding:5px',
        frame: true,
        reference: 'uploadForm',
        layout:
        {
            type: 'vbox',
            align: 'stretch'
        },
        bodyPadding: 2,
        items: [
            {
                xtype: "panel",
                border: 1,
                width: 400,
                layout:
                {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                {
                    xtype: "container",
                    height: 300,
                    margin: "10 10 10 10",
                    layout: "fit",
                    items: [
                    {
                        xtype: "panel",
                        layout: "fit",
                        reference: 'imageShow',
                        id: 'imageShow',
                        itemId: 'imageShow',
                        items: [
                        {
                            xtype: 'box',
                            reference: 'imageShowBox',
                            id: 'imageShowBox',
                            autoEl:
                            {
                                tag: 'img',
                                style: "fixed center center no-repeat;background-size:cover;height:100%;"
                            }
                        }]
                    }]
                },
                {
                    xtype: 'filefield',
                    name: 'file',
                    buttonText: '',
                    margin: "0 10 10 10",
                    buttonOnly: false,
                    listeners:
                    {
                        change: function (fileFiled, value, eOpts)
                        {
                            var me = this;
                            var image = me.up().down("#imageShow").down('box').getEl().dom;
                            var file = fileFiled.fileInputEl.dom.files.item(0);
                            var fileReader = new FileReader(value);
                            fileReader.readAsDataURL(file);
                            fileReader.onload = function (e)
                            {
                                image.src = e.target.result;
                                Ext.getCmp('imageShow').setHidden(false);
                            }
                        }
                    }
                }]
            },
            {
                xtype: "panel",
                border: 1,
                flex: 1,
                layout:
                {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [,
                {
                    xtype: 'htmleditor',
                    anchor: "95%",
                    enableColors: true,
                    border: 1,
                    name: "imgnote",
                    enableAlignments: true,
                    enableLists: true,
                    value: '',
                    enableColors: true,
                    enableFont: true,
                    enableFontSize: true,
                    enableLinks: true,
                    enableFormat: true,
                    enableSourceEdit: true,
                    listeners:
                    {
                        afterrender: function (editor)
                        {
                        }
                    }

                }]
            }

        ],
        buttons: [
        {
            text: '上传',
            handler: function ()
            {
                var form = this.up("form").getForm();
                var rec = form.getValues();
                var notedata = base64encode(Ext.encode(rec.imgnote));
                if (form.isValid())
                {
                    form.submit(
                    {
                        url: "upload.php",
                        params:
                        {
                            fileguid: generateGUID(),
                            act: 'upload',
                            dhlb: dhlb,
                            dhid: dhid,
                            notedata: notedata
                        },
                        waitMsg: "Uploading your file...",
                        success: function (f, a)
                            {
                                var result = a.result
                                console.log(result);
                                Ext.Msg.alert("注意", result.msg);
                                uploadForm.getForm().reset();
                                var image = uploadForm.down("#imageShow");
                                image.setHidden(true);
                                CallBackFunction(result);
                                return;
                            },
                            failure: function (f, a)
                            {
                                Ext.Msg.alert("失败", a.result.msg);
                            }
                    });
                }
            }
        },
        {
            text: '关闭',
            icon: "images/close.gif",
            handler: function ()
            {
                this.up('#uploadFileWin').destroy();
            }
        }]
    })
    uploadWin = new Ext.Window(
    {
        width: 600,
        height: 660,
        title: '图片上传',
        autoScroll: true,
        itemId: 'uploadFileWin',
        plain: true,
        resizable: true,
        frame: true,
        layout: 'fit',
        closeAction: 'destroy',
        border: false,
        items: [uploadForm]
    }).show();
 }