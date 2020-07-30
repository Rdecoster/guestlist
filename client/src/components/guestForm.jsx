import React from 'react';

class GuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // need event handler that pushes the submitted name to the app
  handleSubmit(event) {
    event.preventDefault();
    this.props.addGuest(this.state.value);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }


  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
       </form>
      </div>
    )
  }

}

export default GuestForm;