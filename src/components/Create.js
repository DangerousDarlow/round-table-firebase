import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { TextField } from '@material-ui/core'

const styles = {
}

const Create = ({ classes }) => {
  return (
    <div>
      <TextField
        required
        id='standard-required'
        label='Name'
        defaultValue=''
        className={classes.textField}
        margin='normal'
      />
    </div>
  )
}

Create.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Create)
