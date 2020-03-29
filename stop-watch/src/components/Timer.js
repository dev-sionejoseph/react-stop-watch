import React, {Component} from 'react';


export default class Timer extends Component {
    constructor(props) {
      super(props)
      this.state = {
          counting: false,
          seconds: 0, 
      }
      this.handleStart = this.handleStart.bind(this)
      this.handlePause = this.handlePause.bind(this)
      this.handleReset = this.handleReset.bind(this)
      }
    
  
    handleStart(event) {
      event.preventDefault();
      
      
      this.setState({
      })
    }
  
    handlePause(event) {
      event.preventDefault();
      if (([this.state.seconds]>0) & 
      ([this.state.counting]==true)){
          this.setState({
              counting: false
            })
      } else {
          this.setState({
              counting: true
          })
      }
    }
  
    handleReset(event) {
        this.setState({
            counting: false,
            seconds: 0
      })
      }

    render() {
      return (
        <div>
            <div>
                {this.state.seconds}
            </div>
            <div>
                <button onClick="handlePause">Pause</button>
                <button onClick="handleStart">Start</button>
                <button onClick="handleReset">Reset</button>
            </div>
        </div>
      );
    }
  
  }