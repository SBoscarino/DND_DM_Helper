import React, { Component } from 'react';

//Form Handler
class Form extends Component {
  constructor() {
    super();
    this.state = {
      value : '',
      passPhrase : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({value: event.target.value});
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
         <input type="submit" value="Submit" />
       </form>
     );
   }
 }

export default Form;