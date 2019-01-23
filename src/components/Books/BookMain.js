import React, { Component } from 'react'
import Books from './Books'

class BookMain extends Component {
    state = {
        books: [
            {
                name: 'Javascript',
                price: 20,
                id: 1
            },
            {
                name: 'React',
                price: 30,
                id: 2
            },
            {
                name: 'Redux',
                price: 40,
                id: 3
            },
            {
                name: 'PHP',
                price: 25,
                id: 4
            }
        ]
    }

    //NOTE: Remember - if want to delete a component you have put your method on this page from which page component you want delete

    deleteHandler = (id) => {
        // do not delete book if do not match id
        let newBooks = this.state.books.filter(book => book.id !== id)
        this.setState({
            books: newBooks
        })
    }

    changeHandler = (name, id) => {
        let newBooks = this.state.books.map(book => {
            if(id === book.id){
                // object return
                return {
                    ...book,
                    name: name,
                }
            }
            return book
        })

        this.setState({
            books: newBooks
        })
    }

  render() {
    return (
      <div>
        <Books 
        deleteHandler={this.deleteHandler.bind(this)} 
        books={this.state.books}
        changeHandler={this.changeHandler.bind(this)}
        />
      </div>
    )
  }
}

export default BookMain