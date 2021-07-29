Ext.define('MyApp.model.CpghdModel',
{
    extend: 'Ext.app.ViewModel',
    extend: 'Ext.data.Model',
    alias: 'viewmodel.CpghdModel',
    fields: [
    {
        name: 'id'
    },
    {
        name: 'ghid'
    },
    {
        name: 'ghdh'
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
        name: 'cwshr'
    },
    {
        name: 'ckshr'
    },
    {
        name: 'khshr'
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
        name: 'ghshr'
    },
    {
        name: 'ghr'
    },
    {
        name: 'ghshrq',
        type: 'date',
        dateFormat: 'Y-m-d h:ia'
    },
    {
        name: 'ghrq',
        type: 'date',
        dateFormat: 'Y-m-d'
    },
    {
        name: 'newkhid',
        type: 'int'
    },
    {
        name: 'newkhmc'
    },
    {
        name: 'jebz',
        type: 'bool'
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
        type: 'int'
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