import React, { Component } from 'react';

import axios from 'axios'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import SearchBox from './components/SearchBox.js'
import ContactForm from './components/ContactForm.js'
import ContactList from './components/ContactList.js'

const API_URL='https://address-book-api-kfpkaqtghu.now.sh';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      searchText:'',
      nameText:'',
      lastnameText:'',
      phoneText:'',
    };
  }

  componentDidMount(){
    this.getContacts();
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

  getContacts = () => {
    axios({
      method: 'GET',
      url: API_URL + '/api/contacts',
      headers: {
        'Api-Key': '1720074127',
      },
    }).then((response) => {
        console.log(response);
        this.setState({ contacts: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveContact = (contact) => {
    axios({
      method: 'POST',
      url: API_URL + '/api/contacts',
      headers: {
        'Api-Key': '1720074127',
        'Content-Type': 'application/json',
      },
      data: {
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
      },
    }).then((response) => {
      console.log(response);
      this._getContacts();
    })
    .catch((error) => {
      console.log(error, error.response);
    })
  }

  render() {
    const contacts = this.state.contacts.filter(contact => {
      if (contact.firstName.indexOf(this.state.searchText) > -1) {
        return true;
      }
      if (contact.lastName.indexOf(this.state.searchText) > -1) {
        return true;
      }
      return false;
    });
    return (
      
      <div className="text-center"><Header title="Address Book"/> 
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <SearchBox 
              value={this.state.searchText}
              onChange={this.handleSearchTextChange}
                                         
            />
            <br />
              <ContactList contacts={contacts} />
          </div>
          <div className="col-md-6 text-center">Nuevo Contacto</div>
          <div className="col-md-6"><ContactForm
                                        valueName={this.state.nameText}
                                        valueLastname={this.state.lastnameText}
                                        valuePhone={this.state.phoneText}
                                        onNameChange={this.handleNameTextChange}
                                        onLastnameChange={this.handleLastnameTextChange}
                                        onPhoneChange={this.handlePhoneTextChange}/></div>
                                        saveContact={this.saveContact}
        </div>
      </div> 
      <div><Footer copyrigth="&copy; 2017 Diego Del Salto"/></div>
      </div>
    );
  }
}

export default App;
