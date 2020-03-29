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

      this.setState({
    })
    }
  
    handleReset(event) {
        event.preventDefault();
  
        this.setState({
      })
      }

    render() {
      return (
        <div>
            <div>
                {this.state.seconds}
            </div>
            <div>
                
            </div>
        </div>
      );
    }
  
  }