import React from "react";
import QuoteCard from "./QuoteCard";
import quotesReducer from "./quotesSlice";


function Quotes() {

  const quotes = quotesReducer.quotes
  const quoteComps = quotes.map((quote) => <QuoteCard key={quote.id} quote={quote}/>)
  
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
            {quoteComps}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
