Ext.define('MyApp.view.main.MSFieldFileImageContainer',
{
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.msFieldFileImageContainer',
    imageWidth: 300,
    notice: '',
    layout: 'fit',
    border: false,
    items: [
    {
        xtype: 'form',
        reference: 'uploadForm',
        layout:
        {
            type: 'vbox',
            align: 'stretch'
        },
        bodyPadding: 10,
        items: [
            {
                xtype: 'box',
                flex: 1,
                reference: 'imageShow',
                autoEl:
                {
                    tag: 'img'
                }
            },
            {
                xtype: 'filefield',
                height: 50,
                width: 80,
                buttonText: '',
                buttonOnly: false,
                //buttonText: '选择图片',
                listeners:
                {
                    change: function (fileFiled, value, eOpts)
                    {
                        var me = this;
                        var image = me.up().down('box').getEl().dom;
                        var hidden = me.up().down('hiddenfield');
                        var file = fileFiled.fileInputEl.dom.files.item(0);
                        var fileReader = new FileReader(value);
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function (e)
                        {
                            image.src = e.target.result;
                            hidden.setValue(e.target.result);
                        }
                        me.value = '';
                    }
                }
            }
        ],
        buttons: [
        {
            text: '上传',
            handler: 'btnUploadFormSave'
        },
        {
            text: '放弃',
            icon: "images/close.gif",
            handler: 'btnUploadFormCancel'
        }]
    }]
});