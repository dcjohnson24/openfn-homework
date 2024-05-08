bulk(
    'vera__Indicator_Result__c',
    'upsert', 
    {extIdField: 'vera__Result_UID__c', failOnError: true, allowNoOp: true},
    state => state.records
);
