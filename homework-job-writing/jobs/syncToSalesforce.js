fn(state => {
    const records = state.data.map((i, idx) => {
        return {
            vera__External_ID__c: i.email,
            Name: i.name,
            vera__Username__c: i.username,
            'vera__Hospital__r.vera__External_ID__c': 'rtu_hospital',
            vera__Address__c: state.address[idx],
            vera__Emergency_Contact_Phone__c: state.phoneList[idx],
            vera__Province__c: state.provinceList[idx]
        };
    });
    
    return {...state, records };
});

// bulk upsert not working
bulk(
    'vera__Beneficiary__c',
    'upsert', 
    {extIdField: 'vera__External_ID__c', failOnError: true, allowNoOp: true},
    state => state.records
);

// each(
//     dataPath('records[*]'),
//     upsert(
//       'vera__Beneficiary__c',
//       'vera__External_ID__c',
//       fields(
//         field('Name', dataValue('name')),
//         relationship('vera__Hospital__r', 'vera__External_ID__c', 'rtu_hospital'),
//         field('vera__Username__c', dataValue('records.username')),
//         field('vera__Address__c', dataValue('records.address')),
//         field('vera__Province__c', dataValue('records.province')),
//         field('vera__External_ID__c', dataValue('records.email')),
//         field('vera__Emergency_Contact_Phone__c', dataValue('records.phone'))
//       )
//     )
//   );

// Test that records exist in Salesforce
query(state => 'SELECT vera__External_ID__c, vera__Username__c FROM vera__Beneficiary__c');
  