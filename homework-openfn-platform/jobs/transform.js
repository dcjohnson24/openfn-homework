fn(state => {
  const surveys = state.data; 
  console.log('# of survey submissions detected::', surveys.length); 
  // do some things to state
  return state;
  // state.surveys = state.data; 
  // console.log('# of survey submissions detected::'); 
  // // do some things to state

  // console.log('state', state);
  // return state;
});