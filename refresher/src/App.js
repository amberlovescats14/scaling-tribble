import {React, Fragment } from 'react';
import { BrowserRouter, Link, Outlet } from 'react-router-dom'
import Router from './Router'
import Nav from './components/Nav'


function App() {
  return (
    <Fragment>
      <BrowserRouter>
          <Router/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
