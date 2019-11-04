import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Fab } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const styles = {
  fab: {
    margin: 1,
    top: 'auto',
    left: 'auto',
    bottom: 20,
    right: 20,
    position: 'fixed'
  }
}

const Home = ({ classes }) => {
  return (
    <div>
      <Fab color='primary' className={classes.fab} href='/create'>
        <PlayArrowIcon />
      </Fab>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
