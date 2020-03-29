import React, {Component} from 'react';


export default class Timer extends Component {
    constructor(props) {
      super(props)

    // I gave two states, one to track seconds passed and one to track if the timer is on or off.

      this.state = {
          counting: false,
          seconds: 0, 
      }

    // I thought it best to use the bindings like suggested for our forms.

      this.handleStart = this.handleStart.bind(this)
      this.handlePause = this.handlePause.bind(this)
      this.handleReset = this.handleReset.bind(this)
      }
    
  
    handleStart(event) {
      event.preventDefault();
      this.setState({
          counting: true
      })
    }
  
    handlePause(event) {
      event.preventDefault();
      if ((this.state.seconds > 0) & 
      (this.state.counting == true)){
          this.setState({
              counting: false
            })
      } else if (this.state.seconds > 0){
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
        <div id='main'>
            <div id='seconds'>
                {this.state.seconds}
            </div>
            <div id='buttons'>
                <button name='Pause' onClick={this.handlePause}>Pause</button>
                <button name='Start' onClick={this.handleStart}>Start</button>
                <button name='Reset' onClick={this.handleReset}>Reset</button>
            </div>
        </div>
      );
    }
  
  }