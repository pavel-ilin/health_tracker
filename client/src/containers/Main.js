import React, { Component } from 'react'
import '../assets/index.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from './Header'
import FrontPage from '../components/FrontPage'
import MainMenu from '../components/MainMenu'


class Main extends Component {
  render(){
    return(

      <div className='front_page'>
          {!this.props.userDataLoadingComplete ? <h1 className='display-1'>loading...</h1>  :

          <div>
            <FrontPage />
          </div>
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDataLoadingComplete: state.userDataLoadingComplete
  }
}

export default withRouter(connect(mapStateToProps) (Main))