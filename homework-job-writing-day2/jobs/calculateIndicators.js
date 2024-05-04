// Use double quotes for sql statements
sql(state => "SELECT COUNT(patient_name) as num_enrolled_patients FROM PATIENT WHERE enrolled_in_program = 'yes' GROUP BY VILLAGE_NAME, REGISTRATION_DATE;");

sql(state => "SELECT SUM(opv_doses_given) as num_opv_doses_given FROM PATIENT GROUP BY village_name, registration_date;");

fn(state => state)
// fn(state => {
//     mapping = {''}
//     const records = state.data.map(i => {
//         vera__Result_UID__c = i.registration_date + i.village_name, 
//         vera__Reporting_Period__c = i.registration_date,
//         vera__Geographic_Area__c = i.village_name,
//         'vera__Indicator__r.ExtId__c' = 
//         vera__Value__c = 
//     })
// })