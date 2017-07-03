import React, { Component } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import SearchBox from './components/SearchBox.js'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      searchText:'Buscar',
    };
  }

  handleSearchTextChange=(event)=>{
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    return (
      
      <div className="text-center"><Header title="Address Book"/> 
      <div className="container">
        <div className="row">
          <div className="col-md-6"><SearchBox value={this.state.searchText} onChange={this.handleSearchTextChange}/></div>
          <div className="col-md-6">Nuevo Contacto</div>
        </div>
      </div> 
      <div><Footer copyrigth="2017 Diego Del Salto"/></div>
      </div>
    );
  }
}

export default App;
