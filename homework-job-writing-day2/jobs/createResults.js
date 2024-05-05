each('$.records[*]', 
  create('Indicator_Result__c', $.data)
)

// [R/T] ✘ AdaptorError: The requested resource does not exist
bulk(
    'Indicator_Result__c',
    'upsert', 
    {extIdField: 'Result_UID__c', failOnError: true, allowNoOp: true},
    state => state.records
);
