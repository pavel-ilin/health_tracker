import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/index.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Main extends Component {
  render(){
    return(

      <div>

      {!localStorage.token ?  null :

        <div>
          {!this.props.userDataLoadingComplete ? <h1 className='display-1'>loading...</h1>  :

                  <div>
                    <div>
                      <p className='lead'>Welcome dear <b>{this.props.name}</b></p>
                      <p className='lead'>How are we feeling today?</p>
                    </div>


                      <div className='grid1'>

                        <div className='g1'>
                          <Link to='/bloood-pressure'>
                            <h5 className="card-title">Blood Pressure</h5>
                            <img src={'https://sun9-19.userapi.com/c858528/v858528370/a7af4/op-Kp0298FI.jpg'} alt="bloodPressure" className="img_size"/>
                          </Link>
                        </div>

                        <div className='g1'>
                          <Link to='/cholesterol'>
                            <h5 className="card-title">Cholesterol</h5>
                            <img src={'https://sun9-38.userapi.com/c858528/v858528370/a7ae6/il7HxSFAKts.jpg'} alt="cholesterol" className="img_size"/>
                          </Link>
                        </div>

                        <div className='g1'>
                          <Link to='/metabolic-panel'>
                            <h5 className="card-title">Metabolic Panel</h5>
                            <img src={'https://sun9-60.userapi.com/c858528/v858528370/a7ad1/_EOlyRrYd4E.jpg'} alt="metabolism" className="img_size"/>
                          </Link>
                        </div>

                        <div className='g1'>
                          <Link to='/vitamine-panel'>
                            <h5 className="card-title">Vitamine Panel</h5>
                            <img src={'https://sun9-61.userapi.com/c858528/v858528370/a7adf/7HHhUqX_uRc.jpg'} alt="cholesterol" className="img_size"/>
                          </Link>
                        </div>
                      </div>


                      <div>
                        <p className='lead'>Explore your neighborhood!</p>
                      </div>


                      <div className='grid2'>

                        <div className='g1'>
                          <Link to='/flue-shot'>
                            <h5 className="card-title">Flue Shots</h5>
                            <img src={'https://sun9-9.userapi.com/c858528/v858528370/a7ad8/IEGEuf_mmts.jpg'} alt="flu shot" className="img_size"/>
                          </Link>
                        </div>

                        <div className='g1'>
                          <Link to='/blood-presure-test'>
                            <h5 className="card-title">Blood pressure tests</h5>
                            <img src={'https://sun9-49.userapi.com/c858528/v858528370/a7aed/k9EbqbXrOEQ.jpg'} alt="blood pressure test" className="img_size"/>
                          </Link>
                        </div>
                      </div>


                  </div>

          }
          </div>
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDataLoadingComplete: state.userDataLoadingComplete,
    name: state.name
  }
}

export default withRouter(connect(mapStateToProps) (Main))
