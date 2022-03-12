import React from 'react'
import {Switch,Router} from 'react-router-dom'
import LandingPageContainer from './containers/LandingPageContainer'

export default function Router() {
  return (
    <switch>
      <Route exact strict path='/' component={LandingPageContainer} />
    </switch>
  )
}