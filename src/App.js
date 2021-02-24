import React from 'react'
import './App.css'
import Result from './components/Result'
import Keypad from './components/Keypad'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      result : ""
    }
  }

  onClick = button =>{
    if(button === "=")
      this.calculate()
    else if(button === "C")
      this.reset()
    else{
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () =>{
    let checkResult = ''
    checkResult = this.state.result
    if(this.state.result.includes('--'))
      checkResult = this.state.result.replace('--', '+')
    
    try{
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult))
      })
    }catch(e){
      this.setState({
        result: 'error'
      })
    }
  }

  reset = () =>{
    this.setState({
      result : ""
    })
  }

  render() {
    return(
      <div>
        <div className="calculator">
          <Result result = {this.state.result} />
          <Keypad onClick = {this.onClick} />
        </div>
      </div>
    )
  }
}

export default App;