import React, { Component } from 'react'
import Book from './Book'

class Books extends Component {
  render() {
    return (
      <div>
        {this.props.books.map((book, i) => {
            return (
                <Book key={i}
                deleteHandler={this.props.deleteHandler} 
                book={book}
                changeHandler={this.props.changeHandler}/>
            )
        })}
      </div>
    )
  }
}

export default Books