
//add quote, delete quote, upvote quote, downvote quote
export default function quoteReducer (quotes = [], action){
  switch (action.type) {
    case "ADD_QUOTE":
      return [...quotes, action.quote]
    case "REMOVE_QUOTE":
      debugger
      return quotes.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      return quotes.map(quote => {
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            votes: ++quote.votes
          }}
        else {
          return quote
        }
        })
    case  "DOWNVOTE_QUOTE":
        return quotes.map(quote => {
          if (quote.id === action.quoteId) {
            return {
              ...quote,
              votes: --quote.votes
            }}
          else {
            return quote
          }
          })
    default:
        return quotes;
  }
}
