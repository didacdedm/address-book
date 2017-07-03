import React, { Component } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import SearchBox from './components/SearchBox.js'
import ContactForm from './components/ContactForm.js'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      searchText:'',
      nameText:'',
      lastnameText:'',
      phoneText:'',
    };
  }

  handleSearchTextChange=(event)=>{
    this.setState({
      searchText: event.target.value
    })
  }

  handleNameTextChange=(event)=>{
    this.setState({
      nameText: event.target.value
    })
  }

  handleLastnameTextChange=(event)=>{
    this.setState({
      lastnameText: event.target.value
    })
  }

  handlePhoneTextChange=(event)=>{
    this.setState({
      phoneText: event.target.value
    })
  }

  render() {
    return (
      
      <div className="text-center"><Header title="Address Book"/> 
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <SearchBox 
              value={this.state.searchText}
              onChange={this.handleSearchTextChange}
                                         
            />
          </div>
          <div className="col-md-6">Nuevo Contacto</div>
          <div className="col-md-12"><ContactForm
                                        valueName={this.state.nameText}
                                        valueLastname={this.state.lastnameText}
                                        valuePhone={this.state.phoneText}
                                        onNameChange={this.handleNameTextChange}
                                        onLastnameChange={this.handleLastnameTextChange}
                                        onPhoneChange={this.handlePhoneTextChange}/></div>
        </div>
      </div> 
      <div><Footer copyrigth="&copy; 2017 Diego Del Salto"/></div>
      </div>
    );
  }
}

export default App;
