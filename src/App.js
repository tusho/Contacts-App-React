import React, { Component } from 'react';
import ListContacts from './ListContacts';

const contacts = [
  {
    "id": "ryan",
    "name": "Ryan Reynolds",
    "email": "ryan@test.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@test.com",
    "avatarURL": "http://localhost:5001/michael.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler Jones",
    "email": "tyler@test.com",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts}/>
      </div>
    )
  }
}

export default App;
