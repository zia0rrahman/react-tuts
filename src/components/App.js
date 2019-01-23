import React, { Component } from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Counter from './Counter/Counter';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import BookMain from './Books/BookMain'
import Posts from './Posts/Posts'
import PostForm from './form/PostForm'

class App extends Component {

  state = {
    persons: [
      {
        name: 'Ziaur Rahman',
        occupation: 'Developer',
        address: 'Muradpur, Chitagong, Bangladesh'
      },
      {
        name: 'Mizanur Rahman',
        occupation: 'Marketter',
        address: 'Chwakbazar, Chitagong, Bangladesh'
      },
      {
        name: 'Anzir Rahman',
        occupation: 'Student',
        address: 'Muhammadpur, Dhaka, Bangladesh'
      }
    ]
  }

  

  render() {
    return (
      <div className="App">
        <h1 className="Header-Welcome">Welcome to Web App</h1>

          {/* personal info  */}
        <div className="Personal-Info">
          { this.state.persons.map((person, index) => {
            return <PersonalInfo 
            key={index}
            name={person.name}
            occupation={person.occupation}
            address={person.address}/>
          }) }
        </div>

           {/* counter */}
        <div className="Counter">
          <Counter />
        </div>

          {/* Welcome message to user */}
        <div>
          <WelcomeMessage />
        </div>

        <div className="container">
        <hr/>
          <BookMain />
        <hr/>
        </div>

        <div>
          <hr/>
          <Posts />
        </div>

      {/* form */}
      <hr/>
      <div>
        <PostForm />
      </div>
      </div>
    );
  }
}

export default App;
