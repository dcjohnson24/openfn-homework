sql(state => "SELECT * FROM patient");


sql(state => "SELECT COUNT(patient_name) as num_enrolled_patients, village_name, registration_date FROM patient WHERE enrolled_in_program = 'yes' GROUP BY village_name, registration_date;");


sql(state => "SELECT SUM(opv_doses_given) as num_opv_doses_given, village_name, registration_date FROM patient GROUP BY village_name, registration_date;");


fn(state => {
    const geoMapping = {'Kalapata': 'Uganda', "Conakry": "Guinea", "Kalaa": "Guinea"}
    const getYear = date => {
        let dateObj = new Date(date);
        return dateObj.getFullYear();
    }
    const makeUID = arr => arr.join("_").split(" ").join("_")
    let enrolledList = state.references.at(-1).map(i => {
        let reportingPeriod = getYear(i.registration_date)
        let geoArea = geoMapping[i.village_name]
        return {
            vera__Reporting_Period__c : reportingPeriod,
            vera__Geographic_Area__c : geoArea,
            "vera__Indicator__r.ExtId__c" : "1001",
            vera__Value__c: i.num_enrolled_patients,
            vera__Result_UID__c: makeUID(["1001", reportingPeriod, geoArea]) 
        }  
    })
    
    let opvDoseList = state.data.map(i => {
        let reportingPeriod = getYear(i.registration_date)
        let geoArea = geoMapping[i.village_name]
        return {
            vera__Reporting_Period__c : reportingPeriod,
            vera__Geographic_Area__c : geoArea,
            "vera__Indicator__r.ExtId__c": "1002",
            vera__Value__c: i.num_opv_doses_given,
            vera__Result_UID__c: makeUID(["1002", reportingPeriod, geoArea])
        }
    })

    opvDoseList.forEach(element => {
        enrolledList.push(element)
    });
    let records = enrolledList
    return { ...state, records }
})
