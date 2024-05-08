const geoMapping = { Kalapata: 'Uganda', Conakry: 'Guinea', Kalaa: 'Guinea' };
const getYear = date => {
  const dateObj = new Date(date);
  return dateObj.getFullYear();
};

const makeUID = arr => arr.join('_').split(' ').join('_');

fn(state => {
    state.records = [1001, 1002]
      .map(indicator => {
        state.enrolled_patients.map(patient => {
          const reportingPeriod = getYear(patient.registration_date);
          const geoArea = geoMapping[patient.village_name];
          return {
            vera__Reporting_Period__c: reportingPeriod,
            vera__Geographic_Area__c: geoArea,
            'vera__Indicator__r.vera__ExtId__c': indicator,
            vera__Value__c: patient.num_enrolled_patients,
            vera__Result_UID__c: makeUID([indicator, reportingPeriod, geoArea]),
          };
        });
      })
      .flat();
    state.records.push([1001, 1002].map(indicator => {
        state.num_opv_doses.map(dose => {
            const reportingPeriod = getYear(dose.registration_date);
            const geoArea = geoMapping[dose.village_name];
            return {
                vera__Reporting_Period__c: reportingPeriod,
                vera__Geographic_Area__c: geoArea,
                'vera__Indicator__r.vera__ExtId__c': indicator,
                vera__Value__c: dose.num_opv_doses,
                vera__Result_UID__c: makeUID([indicator, reportingPeriod, geoArea]),
            };
        });
    }).flat());
  
    return state;
  });