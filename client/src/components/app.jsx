import React from 'react';
import GuestList from './guestList.jsx';
import GuestForm from './guestForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      guests: []
    }
    this.addGuest = this.addGuest.bind(this);
  }

  componentDidMount() {
    axios.get('/guests')
      .then ((res) => {
        this.setState({
          guests: res.data
        })
      })
      .catch((err) => {
        console.log('error getting the guests', err)
      })

  }

  // add guests from form submit
  addGuest (guest) {
    console.log(guest);
    let names = this.state.guests.slice();
    names.push(guest);
    this.setState({guests: names});
    // this.setState({guests: [...this.state.guests, guest]})
  }

  render () {
    return(
      <div>
        <GuestForm addGuest={this.addGuest}/>
        <GuestList namelist={this.state.guests}/>
      </div>
    )
  }
}


export default App;


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies : [
//         {title: 'Mean Girls'},
//         {title: 'Hackers'},
//         {title: 'The Grey'},
//         {title: 'Sunshine'},
//         {title: 'Ex Machina'},
//       ]
//     }
//   }



//   render() {
//     return (
//     <div>
//       <h1>MovieList</h1>
//       <div className='box'>{this.state.movies.map((movie) => <ul >{movie.title}</ul>)}</div>
//     </div>
//     )
//   }
// }