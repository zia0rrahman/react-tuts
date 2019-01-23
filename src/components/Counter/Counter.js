import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 10,
            color: 'black'
        }
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })

        if(this.state.count <= 5){
            this.setState({
                color: 'red'
            })
        }else if(this.state.count >= 15){
            this.setState({
                color: 'green'
            })
        }else{
            this.setState({
                color: 'black'
            }) 
        }
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })

        if(this.state.count >= 15){
            this.setState({
                color: 'green'
            })
        }else if(this.state.count <= 5){
            this.setState({
                color: 'red'
            })
        }else{
            this.setState({
                color: 'black'
            }) 
        }
    }

    
  render() {
    return (
      <div>
        <h1 style={{color: this.state.color}}>
            <span><button onClick={this.decrease} className="IncDec">-</button></span>

            <span className="number">{this.state.count}</span>
            
            <span><button onClick={this.increase} className="IncDec">+</button></span></h1>
      </div>
    )
  }
}

export default Counter