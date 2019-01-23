import React, { Component } from 'react'

class Book extends Component {

  state = {
    isEditable: false
  }

  changeKeyHandler = (e) =>{
    if(e.key === 'Enter'){
      this.setState({
        isEditable: false
      })
    }
  }

  render() {

      let output = (
        this.state.isEditable ? <input type="text" placeholder="Enter name" value={this.props.book.name}
        onChange={e => this.props.changeHandler(e.target.value, this.props.book.id)}
        onKeyPress={this.changeKeyHandler}
        />
        : <p>{this.props.book.name}</p>
      )

    return (
      <div>
        <li className="list-group-item d-flex my-3">
            {/* data come from BookMain.js */}
            
            {output}

            <span className="ml-auto">${this.props.book.price}</span>

            <div className="className ml-5">
              <span onClick={() => this.setState({isEditable: true})}><i className="fas fa-user-edit"></i></span>
            </div>

            <div className="ml-2">
                <span onClick={() => this.props.deleteHandler(this.props.book.id)}><i className="fas fa-trash"></i></span>
            </div>
        </li>
      </div>
    )
  }
}

export default Book