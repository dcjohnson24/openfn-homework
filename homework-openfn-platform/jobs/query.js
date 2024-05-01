query('SELECT External_ID__c FROM Survey__c');

fn(state => {
    console.log(state);
    // const existsObj = state.results
    // console.log(existsObj)
    // return { ...state, existsObj };
})
