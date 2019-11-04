import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@material-ui/core'

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

const TopBar = ({ classes, login, logout, user }) => {
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <LogoIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.grow} align={'right'}>
            {user ? user.displayName : null}
          </Typography>
          {user
            ? <IconButton color='inherit' onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </IconButton>
            : <IconButton color='inherit' onClick={login}>
              <FontAwesomeIcon icon={faSignInAlt} />
            </IconButton>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export default withStyles(styles)(TopBar)
