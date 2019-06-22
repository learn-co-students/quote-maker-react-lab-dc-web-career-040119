import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => <QuoteCard 
                  quote={quote} 
                  key = {quote.id}
                  removeQuote={this.props.removeQuote}
                  upvoteQuote={this.props.upvoteQuote}
                  downvoteQuote={this.props.downvoteQuote}
              />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    quotes: store.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeQuote: (quote) => {dispatch(removeQuote(quote))},
    upvoteQuote: (quote) => {dispatch(upvoteQuote(quote))},
    downvoteQuote: (quote) => {dispatch(downvoteQuote(quote))}
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
