import React from 'react'
import PropTypes from 'prop-types'

import CircularProgress from '@material-ui/core/CircularProgress'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  container: {
    minHeight: '80vh'
  }
}

const Waiting = ({ classes }) => {
  return (
    <Grid
      className={classes.container}
      container
      direction='column'
      align='center'
      justify='center'>
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  )
}

Waiting.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Waiting)
