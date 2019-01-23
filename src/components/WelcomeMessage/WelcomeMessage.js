import React, { Component } from 'react'

class WelcomeMessage extends Component {

    state = {
        name: '',
        showMe: false
    }

    messageHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    showMessageCom = () => {
        this.setState({
            showMe: !this.state.showMe
        })
    }


  render() {
      let showMessageCom = null

      if(this.state.showMe){
        showMessageCom = (
            <div className="Welcome-Message">
             <input 
                type="text" 
                onChange={this.messageHandler} 
                placeholder="Please enter your name"
                value={this.state.name}/>
                <div>

                {this.state.name ? <h2>Welcome, {this.state.name}</h2> : ''}
                </div>
            </div>
        )
        return showMessageCom
      }
      
      
    return (
        <div className="Personal-Info">
            <div>
                <button onClick={this.showMessageCom} className="Welcome-Message">Show Greeting!</button>
            </div>
        </div>
    )
  }
}

export default WelcomeMessage