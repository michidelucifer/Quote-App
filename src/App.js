'use strict'
import React from 'react';
import './App.css';

// React

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    /* this.state = {
      quotes: [
        {
          quote: “Don't cry because it's over, smile because it happened.”,
          author: "Dr. Seuss"
        },
        {
          quote: “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”,
          author: "Marilyn Monroe"
        },
        {
          quote: “Be yourself; everyone else is already taken.”,
          author: "Oscar Wilde" 
        },
        {
          quote: “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”,
          author: "Albert Einstein" 
        },
        {
          quote: “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”,
          author: "Bernard M. Baruch" 
        }
      ],
      index: this.getRandomIndex()
    } */
    this.handleNewQuote = this.handleNewQuote.bind(this);  
  }
  /* const getRandomIndex = () => {
    return Math.floor(Math.random() * this.state.quotes.length);
  } */

  const handleNewQuote = () => {
    this.setState({
      index: this.getRandomIndex()
      //,quotes =???
    })
  };
  
  render() {
    return (
      <div id="quote-box">
        <p id="text">{this.props.quotes[this.props.index].quote}</p>
        <p id="author">{this.props.quotes[this.props.index].author}</p>
        <button id="new-quote" onClick={this.handleNewQuote()}>New quote</button>
        <a id="tweet-quote"></a>
      </div>
    )
  }
}

// Redux
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
    index: state.index
  }
}

