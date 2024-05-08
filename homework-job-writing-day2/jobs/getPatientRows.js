sql(state => "SELECT COUNT(patient_name) as num_enrolled_patients, village_name, registration_date FROM patient WHERE enrolled_in_program = 'yes' GROUP BY village_name, registration_date;");
fn(state => {
    state.enrolled_patients = state.data;
    return state;
})

sql(state => "SELECT SUM(opv_doses_given) as num_opv_doses_given, village_name, registration_date FROM patient GROUP BY village_name, registration_date;");

fn(state => {
    state.num_opv_doses = state.data;
    return state;
})
