import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import MapContainer from '../containers/MapContainer'

import { fetchOpenDataFlueShots } from '../actionCreator'


class FlueShot extends Component {

  fetchApi () {
      this.props.fetchOpenDataFlueShots(this.props.zipcode)
  }


  render(){
    this.fetchApi()
    return(
      <div className='App'>
        <p><Link to='/main'>Back to main page</Link></p>
        <MapContainer />
      </div>
    )
  }
  }

  const mapStateToProps = state => {
  return {
      zipcode: state.zipcode
    }
  }

export default withRouter(connect(mapStateToProps, { fetchOpenDataFlueShots } ) (FlueShot))