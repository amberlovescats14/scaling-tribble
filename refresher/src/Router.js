import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPageContainer from './containers/LandingPageContainer';
import TestContainer from './containers/TestContainer';

export default function Router() {
  return (
    <Routes>
      <Route exact strict path="/" element={<LandingPageContainer/>} />
      <Route exact strict path="/test" element={<TestContainer/>} />
    </Routes>
  )
}