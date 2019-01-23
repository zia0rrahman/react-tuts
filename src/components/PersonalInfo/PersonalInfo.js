import React, { Component } from 'react'

class PersonalInfo extends Component {
  render() {
    const { name, occupation, address} = this.props
    return (
      <div>
        <h2>{name}</h2>
        <h4>{occupation}</h4>
        <p>{address}</p>
      </div>
    )
  }
}

export default  PersonalInfo