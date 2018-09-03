import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  state = {
    contacts: [
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
  }
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
