Ext.define('MyApp.model.CpxsdModel',
{
    extend: 'Ext.app.ViewModel',
    extend: 'Ext.data.Model',
    alias: 'viewmodel.CpxsdModel',
    fields: [
    {
        name: 'id'
    },
    {
        name: 'xsid'
    },
    {
        name: 'xsdh'
    },
    {
        name: 'khid',
        type: 'int'
    },
    {
        name: 'ckid',
        type: 'int'
    },
    {
        name: 'khmc'
    },
    {
        name: 'ckmc'
    },
    {
        name: 'cphm'
    },
    {
        name: 'sfdh'
    },
    {
        name: 'dh'
    },
    {
        name: 'sfr'
    },
    {
        name: 'cgy'
    },
    {
        name: 'cwr'
    },
    {
        name: 'czy'
    },
    {
        name: 'shr'
    },
    {
        name: 'cnote'
    },
    {
        name: 'cddh'
    },
    {
        name: 'xssl',
        type: 'float'
    },
    {
        name: 'xszl',
        type: 'float'
    },
    {
        name: 'xsje',
        type: 'float'
    },
    {
        name: 'ccsl',
        type: 'float'
    },
    {
        name: 'cczl',
        type: 'float'
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
        name: 'endrq',
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
        name: 'fhbz',
        type: 'bool'
    },
    {
        name: 'xjbz',
        type: 'bool'
    },
    {
        name: 'khkd',
        type: 'bool'
    },
    {
        name: 'shbz',
        type: 'bool'
    },
    {
        name: 'cdbz',
        type: 'bool'
    }]
});