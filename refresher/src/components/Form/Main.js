import React, { useState } from 'react';
import UserDetails from './UserDetails';
import formTheme from '../../css/FormTheme'
import { AppBar, TextField, Button, MuiThemeProvider, makeStyles, ThemeProvider, createTheme } from '@material-ui/core'

let state = {
  step: 1,
  firstName: 'Amber',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  bio: ''
}
// proceed to the next step
const nextStep = () => {
  const { step } = state
  this.setState({
    step: step + 1
  })
}

// go back
const prevState = () => {
  const { step } = state
  this.setState({
    step: step - 1
  })
}

//handle fields chang
const handleChange = input => e => {
  this.setState({
    [input] : e.target.value
  })
}

const Main = (props) => {
  const [theme, setTheme] = useState(formTheme);
  const { step } = state
  const { firstName, lastName, email, occupation, city, bio } = state

  const values = { 
    firstName,
    lastName,
    email,
    occupation,
    city,
    bio
 }

  console.log(step)
  switch(step) {
    case 1: return (
      <ThemeProvider theme={theme}>
      <UserDetails
        nextStep={nextStep}
        values={values}
        handleChange={handleChange}/>
      </ThemeProvider>
    )
    case 2: return (
      <h1>two</h1>
    )
    case 3: return (
      <h1>three</h1>
    )
    case 4: return (
      <h1>four</h1>
    )
  }
  
}

export default Main