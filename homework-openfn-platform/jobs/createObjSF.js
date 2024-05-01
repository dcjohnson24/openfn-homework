
fn(state => {
    const records = state.data.map(i => {
      return {
        External_ID__c: i.deviceid,
        Age__c: i.age,
        Consent__c: i.consent,
        Name__c: i.name,
        ReviewStatus__c: i.review_status
      };
    });  
    return { ...state, records };
  });
  
each('$.records[*]', 
  create('Survey__c', $.data)
)
