import React from 'react'

const Transaction = ({info,bitValue}) => {

  return(
    <div className="transaction">
      <p>from: {info.tx}</p>
      <p>amount in USD: {(info.amount*bitValue).toFixed(4)}</p>
      <p>amount in BTC: {info.amount}</p>
      <p> at coordinated unviersal time: {info.time_utc}</p>
    </div>
  )
}

export default Transaction
