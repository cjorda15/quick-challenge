const bitValue = (state="???",action) => {
  switch(action.type){

    case 'GET_VALUE':
     return action.payload

    default:
     return state
  }
}

export default bitValue
