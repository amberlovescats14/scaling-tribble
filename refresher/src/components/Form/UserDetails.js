import React, { Fragment } from 'react'
import { AppBar, TextField, Button, MuiThemeProvider, makeStyles, ThemeProvider } from '@material-ui/core'


const UserDetails = (props) => {
  const { nextStep, values, handleChange } = props

  const next = e => {
    e.preventDefault()
    nextStep()
  }
    return (
        <Fragment>
          <AppBar title="Enter User Details"/>
          <TextField
            hintText="First Name"
            floatingLabelText="Please enter your first name"
            onChange={handleChange('firstName')} 
            defaultValue={values.firstName}/>
        </Fragment>
    )
}

export default UserDetails