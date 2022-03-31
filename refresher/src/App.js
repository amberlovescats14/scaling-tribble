import {React, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Nav from './components/Nav'


function App() {
  return (
    <Fragment>
      <BrowserRouter>
          <Nav/>
          <Router/>
      </BrowserRouter>
    </Fragment>
  )

}

export default App;
