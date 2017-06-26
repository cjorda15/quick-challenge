import React, {Component} from 'react'

class Info extends Component{
  constructor(){
    super()
  }

 renderValue(){
  const value = this.props.value ? Number(this.props.value).toFixed(4) : "?"
  if(typeof value === typeof 0){
    return "loading"
  }
  return value
 }

  render(){
  return(
    <div className="info-container">
      <p>1 BTC (in the btce market) = {this.renderValue()} dollar</p>
    </div>
  )
 }
}

export default Info
