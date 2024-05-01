bulk('Survey__c', 'upsert', 
  {extIdField: 'External_ID__c', failOnError: true, allowNoOp: true},
  state => state.records
)

// Test that upsert was successful
query('SELECT External_ID__c FROM Survey__c')
