import React, { Component } from 'react';

//this is the login page
class Login extends Component {
  constructor() {
    super();
    this.state = {
      value : '',
      secretPhrase : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({value: event.target.value, secretPhrase: event.targer.secretPhrase});
 }
 handleSubmit(event) {
     alert('A name was submitted: ' + this.state.value);
     event.preventDefault();
   }

   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <label>
           Group Name:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <label>
           Secret Phrase:
           <input type="text" value={this.state.secretPhrase} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
       </form>
     );
   }
 }

export default Login;
