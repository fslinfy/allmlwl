Ext.define('MyApp.view.main.cpjkdsh.CpjkdCtrlFunction',
{
    extend: 'Ext.Mixin'
});

function imagesload(id)
{
    var p = that.lookupReference('popupCpjkdWindow').getViewModel();
    var id = p.get('jkid');
    Ext.Ajax.request(
    {
        method: 'GET',
        url: sys_ActionPHP,
        params:
        {
            act: 'imagesload',
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            dhlb: 'cpjkd',
            dhid: id
        },
        scope: that,
        success: function (req)
            {
                var data = req.responseText;
                var cnote = "";
                data = data.substring(1);
                var obj = JSON.parse(data);
                if (obj.results > 0)
                {
                    var arrrec = obj.rows;
                    that.lookupReference('popupCpjkdWindow').down("#imageShow").removeAll();
                    arrrec.forEach(function (rec)
                    {
                        cnote = trim(rec.imgnote);
                        if (cnote.length > 0)
                        {
                            var cnote = Ext.decode(base64decode(cnote));
                        }
                        creatOneImage(rec.id, rec.filename, rec.fileguid, cnote, rec.w, rec.h, true);
                    })
                }
            },
            failure: function ()
            {
                Ext.MessageBox.alert('错误!', '发生错误！');
            }
    });
};

function creatOneImage(id, title, pjg, cnote, w, h, delbz)
{
    if (w > 400)
    {
        h = h * 400 / w;
        w = 400;
    }
    if (h > 300)
    {
        w = w * 300 / h;
        h = 300;
    }
    var s = that.lookupReference('popupCpjkdWindow').down("#imageShow");
    var boximage = Ext.create('Ext.container.Container',
    {
        items: [
        {
            xtype: "panel",
            title: title,
            margin: "10,10,10,10 ",
            layout:
            {
                type: 'hbox',
                align: 'stretch'
            },
            border: 1,
            tools: [
            {
                xtype: "button",
                text: '',
                icon: "images/delete.gif",
                hidden: (!delbz),
                handler: function ()
                {
                    imagesdelete(id, pjg);
                }
            }],
            items: [
            {
                xtype: "panel",
                height: 300,
                width: 400,
                border: 1,
                items: [
                {
                    xtype: 'box',
                    height: h,
                    width: w,
                    title: "box",
                    autoEl:
                    {
                        tag: 'img',
                        src: 'uploadFiles//' + pjg
                    }
                }]
            },
            {
                xtype: "panel",
                flex: 1,
                layout: 'fit',
                border: 1,
                html: cnote
            }]
        }]
    });
    s.add(boximage)
    return;
};

function imagesdelete(imgid, imgfile)
{
    var abc = Ext.Msg.confirm("注意！ ", "真的删除此图片吗？", function (e)
    {
        if (e == 'yes')
        {
            Ext.Ajax.request(
            {
                method: 'GET',
                url: "upload.php",
                params:
                {
                    act: 'imgdelete',
                    imgid: imgid,
                    imgfile: imgfile
                },
                scope: that,
                success: function (f, a)
                    {
                        var result = Ext.decode(f.responseText)
                        if (result.success)
                        {
                            imagesload();
                        }
                        else
                        {
                            Ext.Msg.alert("注意", result.msg);
                        }
                        return;
                    },
                    failure: function (f, a)
                    {
                        Ext.Msg.alert("失败", a.result.msg);
                    }
            });
        }
    })
};

function onImagesAdd()
{
    var p = that.lookupReference('popupCpjkdWindow').getViewModel();
    var jkid = p.get('jkid');
    uploadFile('cpjkd', jkid, uploadCallBack);
    return false;
};

function uploadCallBack(rec)
{
    var cnote = trim(rec.imgnote);
    if (cnote.length > 0)
    {
        var cnote = Ext.decode(base64decode(cnote));
    }
    creatOneImage(rec.id, rec.filename, rec.fileguid, cnote, rec.w, rec.h, true);
};