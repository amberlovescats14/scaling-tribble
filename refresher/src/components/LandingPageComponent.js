import React, {useEffect, Fragment} from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';


const useStyles = makeStyles((theme) => ({
    header: {
      border: `10px solid ${orange[800]}`,
      textAlign: 'center'
    }
}))

const LandingPageComponent = (props) => {
  const { getPrinciples, principlesObject } = props
  const classes = useStyles()

  useEffect(() => {
    getPrinciples()
  }, [getPrinciples])

    return (
      <Fragment>
      <div>
        <Typography 
        variant="h1"
        className={classes.header}>Hello World</Typography>
      {principlesObject.principles.map((p, i) => (
        p
      ))}
      </div>
      </Fragment>
    )
}

export default LandingPageComponent;
