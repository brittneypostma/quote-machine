import React, { Component } from 'react'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer';

componentDidMount() {
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(quote => this.setState({quotes: quote}))
}

class App extends Component {
    constructor(props) {
        super(props)
            this.state = { quotes: quote }
    }
    render() {
      return(
        <div className='wrapper' id='wrapper'>
          <Card />
          <Footer />
        </div>
      )
    }
}

export default App
