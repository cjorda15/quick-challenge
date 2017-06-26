import React,{Component} from 'react'
import {connect} from 'react-redux'
import Info from './Info.js'
import TransactionList from './TransactionList.js'
import {getValue,getHistory} from '../actions/index.js'

class App extends Component{
  constructor(){
    super()
    this.state={
      input:"",
      loading:false,
    }
  }

  componentDidMount(){
    const url = 'http://btc.blockr.io/api/v1/coin/info'
    fetch(url)
    .then(info => info.json())
    .then(info => this.props.handleGetValue(info.data.markets.btce.daily_change.value))
    .catch(err => console.log(err))
  }

  getHistory(e){
    this.setState({loading:true})
    e.preventDefault()
    const url = 'http://btc.blockr.io/api/v1/address/txs/'

    // fetch(url + this.state.input)
    fetch('http://btc.blockr.io/api/v1/address/txs/198aMn6ZYAczwrE5NvNTUMyJ5qkfy4g3Hi')
    .then(info =>info.json())
    .then(info => this.props.handleGetHistory(info.data))
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div className="app-container">
        <div className="app-banner">
          Hi Sam! Hope the lemonade biz is going well!
        </div>
        <Info
        value={this.props.bitValue}/>
        <input
          className="address-input"
          type="text"
          placeholder="please type in your bitcoin address"
          value={this.state.input}
          onChange={(e)=>{this.setState({input:e.target.value})}}/>
        <button
        className="address-btn"
        type="button"
        onClick={(e)=>{this.getHistory(e)}}>submit</button>
        <TransactionList
          paymentHistory={this.props.paymentHistory}
          bitValue={this.props.bitValue}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bitValue:state.bitValue,
    paymentHistory:state.paymentHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetValue:(input) => {
      dispatch(getValue(input))
    },
    handleGetHistory:(input) => {
      dispatch(getHistory(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
