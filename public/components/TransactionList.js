import React,{Component} from 'react'
import Transaction from './Transaction.js'

class TransactionList extends Component{
  constructor(){
    super()
  }

  renderAddress(){
   return this.props.paymentHistory? this.props.paymentHistory.address: "???"
 }

   renderHistory(){
    return this.props.paymentHistory?
      this.createList() :""
  }

  createList(){
    if(this.props.paymentHistory.txs.length<0){
      return "no transaction history to report on for this bit address"
    }

    return this.props.paymentHistory.txs.map((item, index) =>{
      return <Transaction
              info ={item}
              key={index}
              index={index}
              bitValue={this.props.bitValue}/>
    })
  }

  render(){
  return(
    <div className="transaction-list-container">
      <div className="btc-address">
       Address: {this.renderAddress()}
      </div>
      <div  className="transaction-list">
        {this.renderHistory()}
      </div>
    </div>
  )
 }
}

export default TransactionList
