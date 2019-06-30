import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import LogoIcon from './LogoIcon'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const TopBar = ({ login, classes, credentials }) => {
  useEffect(() => {
    console.log('topbar credentials', credentials)
  })

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <LogoIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.grow} align={'right'}>
            {credentials.user ? credentials.user.displayName : null}
          </Typography>
          <IconButton color='inherit' onClick={login}>
            <FontAwesomeIcon icon={faSignInAlt} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)
