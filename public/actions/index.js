export const getValue = (input) => {
  return{
    type:"GET_VALUE",
    payload:input
  }
}


export const getHistory = (input) => {
  return{
    type:"GET_HISTORY",
    payload:input
  }
}
