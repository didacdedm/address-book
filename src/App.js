import React, { Component } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      
      <div className="text-center"><Header title="Address Book"/> Hola Mundo <Footer copyrigth="2017 Diego Del Salto"/> </div>
    );
  }
}

export default App;
