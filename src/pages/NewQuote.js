import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import {useHistory} from 'react-router-dom';
const NewQuote = () => {
 const history = useHistory();
  //handle new quote
  const addQuoteHandler = (data) =>{
     console.log(data);
     history.push('/quotes')
  }

    return <QuoteForm onAddQuote = {addQuoteHandler}/>
  };

  export default NewQuote;