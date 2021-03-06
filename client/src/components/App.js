import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
const Dashboard = () => <h2> Dashboard </h2>
const Landing = () => <h2> Landing </h2>
const Survey = () => <h2> Survey </h2>

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div className='container'>
          <Header/>
          <Route path='/' exact component={Landing} />
          <Route path='/surveys' exact component={Dashboard} />
          <Route path='/surveys/new' exact component={Survey} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
