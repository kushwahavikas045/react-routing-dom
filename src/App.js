import React from 'react'
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
function App() {
  return (
    <BrowserRouter>
    <Layout/>
   <Switch>
     <Route exact path='/'>
       <Redirect to="/quotes"/>
     </Route>
     <Route exact path='/quotes'>
       <AllQuotes/>
     </Route>
     <Route path='/quotes/:quoteId'>
       <QuoteDetail/>
       </Route>
       <Route path='/new-quote'>
         <NewQuote/>
       </Route>
       <Route path='*'>
         <NotFound/>
       </Route>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
