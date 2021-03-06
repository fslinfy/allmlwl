Ext.define('MyApp.model.CpgfdshModel',
{
    extend: 'Ext.app.ViewModel',
    extend: 'Ext.data.Model',
    alias: 'viewmodel.CpgfdshModel',
    fields: [
    {
        name: 'id',
        type: 'int'
    },
    {
        name: 'ckid',
        type: 'int'
    },
    {
        name: 'gfid',
        type: 'int'
    },
    {
        name: 'thr'
    },
    {
        name: 'cgy'
    },
    {
        name: 'cwsh'
    },
    {
        name: 'czy'
    },
    {
        name: 'shr'
    },
    {
        name: 'khshr'
    },
    {
        name: 'ckshr'
    },
    {
        name: 'cwshr'
    },
    {
        name: 'cnote'
    },
    {
        name: 'sfdh'
    },
    {
        name: 'gfdh'
    },
    {
        name: 'cphm'
    },
    {
        name: 'sfr'
    },
    {
        name: 'ckmc'
    },
    {
        name: 'khmc'
    },
    {
        name: 'Address'
    },
    {
        name: 'dh'
    },
    {
        name: 'khsl',
        type: 'float'
    },
    {
        name: 'khzl',
        type: 'float'
    },
    {
        name: 'sl',
        type: 'float'
    },
    {
        name: 'zl',
        type: 'float'
    },
    {
        name: 'cwsl',
        type: 'float'
    },
    {
        name: 'cwzl',
        type: 'float'
    },
    {
        name: 'dj',
        type: 'float'
    },
    {
        name: 'je',
        type: 'float'
    },
    {
        name: 'xjje',
        type: 'float'
    },
    {
        name: 'gfrq',
        type: 'date',
        dateFormat: 'Y-m-d'
    },
    {
        name: 'xsrq',
        type: 'date',
        dateFormat: 'Y-m-d'
    },
    {
        name: 'ckrq',
        type: 'date',
        dateFormat: 'Y-m-d'
    },
    {
        name: 'cwshrq',
        type: 'date',
        dateFormat: 'Y-m-d'
    },
    {
        name: 'khshrq',
        type: 'date',
        dateFormat: 'Y-m-d'
    },
    {
        name: 'ckshrq',
        type: 'date',
        dateFormat: 'Y-m-d'
    },
    {
        name: 'shrq',
        type: 'date',
        dateFormat: 'Y-m-d h:ia'
    },
    {
        name: 'ztbz',
        type: 'bool'
    },
    {
        name: 'delbz',
        type: 'bool'
    },
    {
        name: 'shbz',
        type: 'bool'
    }]
});