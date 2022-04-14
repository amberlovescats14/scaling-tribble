import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPageContainer from './containers/LandingPageContainer';
import TestContainer from './containers/FormContainer';

export default function Router() {
  return (
    <Routes>
      <Route exact strict path="/home" element={<LandingPageContainer/>} />
      <Route exact strict path="/form" element={<TestContainer/>} />
    </Routes>
  )
}