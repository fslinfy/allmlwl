Ext.define('MyApp.view.main.DataSave',
{
    extend: 'Ext.Mixin',
    sqltest1: function ()
        {
            console.log('sqltest1');
        }
});

AjaxDataSave = function (act, loc, data, CallBackFunction, the)
{
    Ext.Ajax.request(
    {
        method: 'GET',
        url: sys_ActionPHP,
        params:
        {
            act: act,
            loc: loc,
            p_l_id: sys_location_id,
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            data: data
        },
        scope: that,
        success: function (response)
            {
                var result = Ext.decode(response.responseText);
                if (result.result == 'success')
                {
                    CallBackFunction(the);
                }
                else
                {
                    Ext.MessageBox.alert('错误!', '数据保存失败！');
                }
            },
            failure: function ()
            {
                Ext.MessageBox.alert('错误!', '发生错误！');
            }
    });
}