const paymentHistory = (state=null,action) => {
  switch(action.type){

    case 'GET_HISTORY':
     return action.payload

    default :
     return state
  }
}

export default paymentHistory
